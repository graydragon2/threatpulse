"use client";

import { useEffect, useState } from "react";
import { fetchRssFeeds } from "@/lib/api";

export default function ThreatDashboard() {
  const [feeds, setFeeds] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadFeeds = async () => {
      try {
        const data = await fetchRssFeeds(["conflict", "cyber", "attack"]);
        setFeeds(data.items);
      } catch (err) {
        console.error(err);
        setError("Failed to load feeds");
      } finally {
        setLoading(false);
      }
    };

    loadFeeds();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="space-y-4">
      {feeds.map((item, index) => (
        <div key={index} className="border p-4 rounded bg-card">
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold hover:underline"
          >
            {item.title}
          </a>
          <p className="text-muted-foreground text-sm">
            {new Date(item.pubDate).toLocaleString()}
          </p>
          <p className="mt-2 text-sm">{item.contentSnippet}</p>
        </div>
      ))}
    </div>
  );
}
