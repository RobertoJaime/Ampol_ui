
import { AmpolHomePage } from './AmpolHomePage';
import { AmpolEnergyPage } from './AmpolEnergyPage';
import { Page, Browser, test, expect } from '@playwright/test';

test.describe('Ampol Technical Test', () => {
  let browser: Browser;
  let page: Page;
  let ampollHomePage: AmpolHomePage;
  let ampollEnergyPage: AmpolEnergyPage;

  test('Scenario A steps', async ({page}) => {
    // Visit https://www.ampol.com.au/
    await page.goto('https://www.ampol.com.au/');
    // Hover on ‘YOUR VEHICLE’ menu.
    await page.hover('text=YOUR VEHICLE');
    // Click on ‘EV charging’ option.
    await page.getByRole('link', { name: 'EV Charging', exact: true }).click();
    // Verify that the URL is https://ampcharge.ampol.com.au
    const currentEVChargingURL = await page.url();
    const expectedEVChargingURL = 'https://ampcharge.ampol.com.au/';
    expect(currentEVChargingURL).toBe(expectedEVChargingURL);
    // Click on AMPOL energy icon at the top of the page.
    await page.locator('#mod-nav-1').getByRole('link').nth(1).click();
    // Click on ‘SWITCH NOW’ button.
    await page.getByRole('banner').getByRole('link', { name: 'Switch now' }).click();
    // Verify that the URL is https://energy.ampol.com.au/sign-up/postcode
    const currentSignUpURL = await page.url();
    const expectedSignUpURL = 'https://energy.ampol.com.au/sign-up/postcode';
    expect(currentSignUpURL).toBe(expectedSignUpURL);
  });
});
