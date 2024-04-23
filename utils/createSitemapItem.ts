import type { SitemapUrl } from "@nuxtjs/sitemap/dist/runtime/types";

export const createSitemapItem = function (): SitemapUrl {
  return {
    changefreq: 'daily',
    loc: '/',
    priority: 0.5,
  };
};
