import {
  HomeIcon,
  Layers2Icon,
  ShieldCheckIcon,
  CoinsIcon,
} from "lucide-react";

export const routes = [
  {
    href: "/home",
    label: "Home",
    icon: HomeIcon,
  },
  {
    href: "workflows",
    label: "WorkFlows",
    icon: Layers2Icon,
  },
  {
    href: "credentials",
    label: "Credentials",
    icon: ShieldCheckIcon,
  },
  {
    href: "billing",
    label: "Billing",
    icon: CoinsIcon,
  },
];

export const headerRoutes = [
  {
    title: "How it works",
    href: "#howItWorks",
    className: "",
  },
  {
    title: "Scraping Features",
    href: "#scrapingFeatures",
    className: "",
  },
  {
    title: "Pricing",
    href: "#pricing",
    className: "",
  },
  {
    title: "Get Started",
    href: "/sign-in",
    className: "",
    button: true,
  },
];

export const typeWriterWords = [
  {
    text: "Build",
  },
  {
    text: "Powerful",
  },
  {
    text: "Web",
    className: "text-primary dark:text-primary",
  },
  {
    text: "Scraping",
    className: "text-primary dark:text-primary",
  },
  {
    text: "Workflows.",
  },
];

export const pricingPlans = [
  {
    title: "Small Pack",
    description: "Get 1,000 credits",
    credits: 1000,
    price: 9.99,
    link: "/small-pack",
  },
  {
    title: "Medium Pack",
    description: "Get 5,000 credits",
    credits: 5000,
    price: 39.99,
    highlighted: true,
    link: "/medium-pack",
  },
  {
    title: "Large Pack",
    description: "Get 10,000 credits",
    credits: 10000,
    price: 69.99,
    link: "/large-pack",
  },
];


export const howItWorks = [
  {
    id:"1",
    title: "Build Your Workflow",
    description:
      "Create powerful workflows with intuitive tools and actions, simplifying complex scraping tasks.",
  },
  {
    id:"2",
    title: "Scrape with Precision",
    description:
      "Extract data efficiently from any web page using advanced tools, including AI-powered data extraction.",
  },

  {
    id:"3",
    title: "Automate and Optimize",
    description:
      "Schedule workflows, monitor execution stats, and optimize processes for maximum efficiency.",
  },
  {
    id:"4",
    title: "Deliver Anywhere",
    description:
      "Send your scraped data directly to APIs, webhooks, or your preferred storage seamlessly.",
  },
];