import MarketDetails from "@/components/markets/MarketDetails";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ symbol: string }>;
}): Promise<Metadata> {
  const { symbol } = await params;
  return {
    title: `Neve - ${symbol.toUpperCase()} Market`,
    metadataBase: new URL("https://neve-lend.com"),
    description: `Explore the ${symbol.toUpperCase()} market on Neve.`,
    keywords: [
      "ibc",
      "neutron",
      "lend",
      "borrow",
      "earn",
      "mars protocol",
      symbol,
    ],
    openGraph: {
      type: "website",
      url: `https://neve-lend.com/markets/${symbol}`,
      title: `Neve - ${symbol.toUpperCase()} Market`,
      locale: "en_US",
      description: `Explore the ${symbol} market on Neve.`,
      siteName: "Neve",
      images: [
        {
          url: "https://neve-lend.com/banner.jpg",
          width: 1280,
          height: 720,
          alt: "Neve",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@Neve_Lend",
      title: `Neve - ${symbol.toUpperCase()} Market`,
      description: `Explore the ${symbol.toUpperCase()} market on Neve.`,
      images: [
        {
          url: "https://neve-lend.com/banner.jpg",
          width: 1280,
          height: 720,
          alt: "Neve",
        },
      ],
    },
  };
}

export default function MarketDetailsPage() {
  return <MarketDetails />;
}
