// lib/api.ts
export async function fetchRssFeeds(keywords: string[] = [], page = 1, limit = 20) {
  const query = new URLSearchParams({
    keywords: keywords.join(','),
    page: String(page),
    limit: String(limit)
  });

  const res = await fetch(`https://threatpulse-backend-production.up.railway.app/rss?${query}`);

  if (!res.ok) {
    throw new Error("Failed to fetch RSS feeds");
  }

  return res.json();
}
