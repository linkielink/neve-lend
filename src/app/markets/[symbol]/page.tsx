import MarketDetails from "@/components/markets/MarketDetails";

export async function generateMetadata({
  params,
}: {
  params: { symbol: string };
}) {
  return {
    title: `Neve - ${params.symbol.toUpperCase()} Market`,
    metadataBase: new URL("https://neve-lend.com"),
    description: `Explore the ${params.symbol.toUpperCase()} market on Neve.`,
    keywords: [
      "ibc",
      "neutron",
      "lend",
      "borrow",
      "earn",
      "mars protocol",
      params.symbol,
    ],
    openGraph: {
      type: "website",
      url: `https://neve-lend.com/markets/${params.symbol}`,
      title: `Neve - ${params.symbol.toUpperCase()} Market`,
      locale: "en_US",
      description: `Explore the ${params.symbol} market on Neve.`,
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
      title: `Neve - ${params.symbol.toUpperCase()} Market`,
      description: `Explore the ${params.symbol.toUpperCase()} market on Neve.`,
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
