import { Page } from '@playwright/test';
export class AmpolEnergyPage {
  private page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async clickOnAmpolEnergyIcon() {
    await this.page.locator('#mod-nav-1').getByRole('link').nth(1).click();
  }

  async clickOnSwitchNowButton() {
    await this.page.getByRole('banner').getByRole('link', { name: 'Switch now' }).click();
  }
}

