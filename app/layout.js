import "./globals.css";

export const metadata = {
  title: "Kwanele Simelane | Business IT Specialist & Developer",
  description:
    "Premium portfolio for Kwanele Simelane, showcasing web and mobile development, networking, cybersecurity, and business IT expertise.",
  icons: {
    icon: "/kwanele_logo.png"
  },
  keywords: [
    "Kwanele Simelane",
    "Business IT Specialist",
    "Software Developer",
    "Networking",
    "Cybersecurity",
    "Flutter Developer",
    "Portfolio"
  ],
  openGraph: {
    title: "Kwanele Simelane | Portfolio",
    description:
      "I build scalable digital solutions with expertise in software, networking, and cybersecurity.",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
