/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, Service } from "./types";

export const IMAGES = {
  heroArtwork: "/src/assets/images/hero_artwork_1780406116770.png",
  avatar: "/src/assets/images/abdul_avatar_1780406138625.png",
  sportsCampaign: "/src/assets/images/sports_campaign_1780406159567.png",
  luxuryWatch: "/src/assets/images/luxury_watch_1780406182353.png",
  universityEvent: "/src/assets/images/university_event_1780406207526.png",
  socialBrand: "/src/assets/images/social_brand_1780406230411.png",
  ecommerceProduct: "/src/assets/images/ecommerce_product_1780406251568.png"
};

export const INSTAGRAM_LINK = "https://instagram.com/abdulahad62190";
export const BEHANCE_LINK = "https://behance.net/abdulahad62190";
export const LINKEDIN_LINK = "https://linkedin.com/in/abdulahad";
export const WHATSAPP_LINK = "https://wa.me/923000000000"; // Placeholder link for WhatsApp contact
export const EMAIL_ADDRESS = "mailto:abdulahad62190@gmail.com";

export const PROJECTS: Project[] = [
  {
    id: "sports-poster-1",
    title: "Vanguard FC Championship Poster",
    category: "Sports Posters",
    image: IMAGES.sportsCampaign
  },
  {
    id: "product-ads-1",
    title: "Aether Luxury Chronograph Ad",
    category: "Product Advertisements",
    image: IMAGES.luxuryWatch
  },
  {
    id: "event-poster-1",
    title: "Apex Creative & Arts Festival Flyer",
    category: "Event Posters",
    image: IMAGES.universityEvent
  },
  {
    id: "social-media-1",
    title: "Lumina Studio Dark Theme Branding Grid",
    category: "Social Media Posts",
    image: IMAGES.socialBrand
  },
  {
    id: "branding-project-1",
    title: "Visual Creative Personal Emblem Concept",
    category: "Branding Projects",
    image: IMAGES.heroArtwork
  },
  {
    id: "marketing-creative-1",
    title: "AeroPulse Pure-Bass Audio Launch Header",
    category: "Marketing Creatives",
    image: IMAGES.ecommerceProduct
  }
];

export const SERVICES: Service[] = [
  {
    title: "Social Media Design",
    description: "High-octane, visually striking social media assets and custom graphics tailored for engagement."
  },
  {
    title: "Sports Poster Design",
    description: "Extreme energy posters, match-day templates, and championship promotional assets."
  },
  {
    title: "Advertising Creatives",
    description: "Premium product campaigns, luxury layouts, and click-optimized high-performing digital ads."
  },
  {
    title: "Brand Identity",
    description: "Distinct visual design systems, custom typography pairings, aesthetic guidelines, and logos."
  },
  {
    title: "Event Posters",
    description: "Vibrant promotional event flyers, high-end creative festival prints, and digital announcements."
  },
  {
    title: "Marketing Graphics",
    description: "High-end corporate marketing kits, campaign headers, presentation visuals, and collateral."
  }
];
