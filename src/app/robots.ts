import { MetadataRoute } from "next";

const BASE_URL =
  process.env.NEXT_PUBLIC_URL || "https://nizamcellularleuwiliang.my.id";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/private/"],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
