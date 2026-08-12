export default function sitemap() {
  const baseUrl = "https://your-portfolio-domain.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1
    }
  ];
}
