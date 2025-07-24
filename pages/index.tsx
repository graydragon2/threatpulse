import { useEffect, useState } from 'react';

interface RSSItem {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet?: string;
  creator?: string;
}

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || 'https://threatpulse.up.railway.app';

export default function Home() {
  const [items, setItems] = useState<RSSItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [keywords, setKeywords] = useState('');
  const [page, setPage] = useState(1);

  const fetchRSS = async () => {
    setLoading(true);
    setError(null);
    try {
      const query = keywords ? `keywords=${keywords}` : '';
      const res = await fetch(`${API_BASE}/rss?${query}&page=${page}&limit=10`);
      const data = await res.json();
      if (!data.success) throw new Error(data.message || 'API error');
      setItems(data.items);
    } catch (err: any) {
      setError(err.message || 'Fetch failed');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRSS();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setPage(1);
    fetchRSS();
  };

  return (
    <main className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">🛰️ ThreatPulse Live Feed</h1>

      <form onSubmit={handleSearch} className="mb-4 flex gap-2">
        <input
          type="text"
          placeholder="Enter keywords (e.g. cyber, alert)"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
          className="flex-1 p-2 border rounded"
        />
        <button type="submit" className="bg-black text-white px-4 py-2 rounded">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">❌ {error}</p>}

      {!loading && !error && (
        <ul className="space-y-4">
          {items.map((item, idx) => (
            <li key={idx} className="border p-3 rounded shadow">
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium">
                {item.title}
              </a>
              <p className="text-sm text-gray-600">{item.pubDate}</p>
              {item.contentSnippet && <p className="mt-1 text-gray-800">{item.contentSnippet}</p>}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-6 flex justify-between">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          ◀ Prev
        </button>
        <span className="px-4 py-2">Page {page}</span>
        <button
          onClick={() => setPage((p) => p + 1)}
          className="px-4 py-2 bg-gray-200 rounded"
        >
          Next ▶
        </button>
      </div>
    </main>
  );
}
