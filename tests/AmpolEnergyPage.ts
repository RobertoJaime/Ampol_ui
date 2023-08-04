import { Page } from '@playwright/test';
import { expect } from '@playwright/test';

export class AmpolEnergyPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async verifyURL(expectedURL: string) {
    const currentURL = await this.page.url();
    expect(currentURL).toBe(expectedURL);
  }

  async clickSwitchNowButton() {
    await this.page.click('text=SWITCH NOW');
  }
}
