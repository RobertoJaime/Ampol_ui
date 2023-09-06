import { chromium, BrowserContext, Page } from '@playwright/test';

export default async function globalSetup() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Expose the page variable globally to use it in tests
  (global as any).page = page;
}
