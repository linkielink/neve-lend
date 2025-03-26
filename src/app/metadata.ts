import { Metadata } from "next";

export const metaData: { [key: string]: Metadata } = {
  home: {
    title: "Neve - powered by Mars Protocol",
    metadataBase: new URL("https://neve-lend.com"),
    description:
      "Lend and borrow on Neutron with ease. Simple, secure, and fast.",
    keywords: ["ibc", "neutron", "lend", "borrow", "earn", "mars protocol"],
    openGraph: {
      type: "website",
      url: "https://neve-lend.com",
      title: "Neve - lend and borrow on Neutron with ease",
      locale: "en_US",
      description: "Simple, secure, and fast. Powered by Mars Protocol.",
      siteName: "Neve",
      images: [
        {
          url: "https://neve-lend.com/banner.png",
          width: 1280,
          height: 720,
          alt: "Neve",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@Neve_Lend",
      title: "Neve - lend and borrow on Neutron with ease",
      description:
        "Lend and borrow on Neutron with easy. Simple, secure, and fast.",
      images: [
        {
          url: "https://neve-lend.com/banner.png",
          width: 1280,
          height: 720,
          alt: "Neve",
        },
      ],
    },
  },
  markets: {
    title: "Neve - Markets",
    metadataBase: new URL("https://neve-lend.com"),
    description: "Explore the markets on Neve.",
    keywords: ["ibc", "neutron", "lend", "borrow", "earn", "mars protocol"],
    openGraph: {
      type: "website",
      url: "https://neve-lend.com/markets",
      title: "Neve - Markets",
      locale: "en_US",
      description: "Explore the markets on Neve.",
      siteName: "Neve",
      images: [
        {
          url: "https://neve-lend.com/banner.png",
          width: 1280,
          height: 720,
          alt: "Neve",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@Neve_Lend",
      title: "Neve - Markets",
      description: "Explore the markets on Neve.",
      images: [
        {
          url: "https://neve-lend.com/banner.png",
          width: 1280,
          height: 720,
          alt: "Neve",
        },
      ],
    },
  },
};
