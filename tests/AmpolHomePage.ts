import { Page } from '@playwright/test';
export class AmpolHomePage {
  private page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://www.ampol.com.au/');
  }

  async hoverOnYourVehicleMenu() {
    await this.page.hover('text=YOUR VEHICLE');
  }

  async clickOnEVChargingOption() {
    await this.page.click('text=EV Charging');
  }
}
