import type { MetadataRoute } from "next";

const domain = "https://[YOUR_DOMAIN]";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${domain}/`, lastModified: new Date("2026-10-14"), changeFrequency: "weekly", priority: 1 },
    { url: `${domain}/profile`, lastModified: new Date("2026-10-14"), changeFrequency: "monthly", priority: 0.9 },
  ];
}
