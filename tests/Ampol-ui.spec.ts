import { chromium } from 'playwright';
import { test, expect } from '@playwright/test';
import { AmpolHomePage } from './AmpolHomePage';
import { AmpolEnergyPage } from './AmpolEnergyPage';

test.describe('Ampol Technical Test', () => {
  let browser;
  let page;
  let ampollHomePage;
  let ampollEnergyPage;

  test.beforeAll(async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
    ampollHomePage = new AmpolHomePage(page);
    ampollEnergyPage = new AmpolEnergyPage(page);
  });

  test.afterAll(async () => {
    await browser.close();
  });

  test('Scenario A steps', async () => {
    await ampollHomePage.navigate();
    await ampollHomePage.hoverOnYourVehicleMenu();
    await ampollHomePage.clickOnEVChargingOption();

    const currentEVChargingURL = await page.url();
    const expectedEVChargingURL = 'https://ampcharge.ampol.com.au/';
    expect(currentEVChargingURL).toBe(expectedEVChargingURL);

    await ampollEnergyPage.clickOnAmpolEnergyIcon();
    await ampollEnergyPage.clickOnSwitchNowButton();

    const currentSignUpURL = await page.url();
    const expectedSignUpURL = 'https://energy.ampol.com.au/sign-up/postcode';
    expect(currentSignUpURL).toBe(expectedSignUpURL);
  });
});
