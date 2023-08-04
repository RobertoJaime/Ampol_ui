import { Page } from '@playwright/test';

export class AmpolHomePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async visit() {
    await this.page.goto('https://www.ampol.com.au/');
  }

  async hoverOnYourVehicleMenu() {
    await this.page.hover('text=YOUR VEHICLE');
  }

  async clickEVChargingOption() {
    await this.page.click('text=EV charging');
  }

  async clickAmpolEnergyIcon() {
    await this.page.click('.ampol-icon');
  }
}
