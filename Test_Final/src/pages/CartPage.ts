import { expect } from "@playwright/test";
import { Page} from "playwright-core";

export class CartPage {
    readonly page:Page;
    constructor(page:Page) {
        this.page = page;
    }

    async confirmShop(name:string,lastName:string,zip:string){
        const checkButton = this.page.locator('[id="checkout"]');
        const inputName = this.page.locator('[id="first-name"]');
        const inputLastName = this.page.locator('[id="last-name"]');
        const inputZip = this.page.locator('[id="postal-code"]');
        const continueButton = this.page.locator('[id="continue"]');
        const finishButton = this.page.locator('[id="finish"]');
        const label = this.page.locator('[class="complete-header"]');

        await checkButton.click();
        await inputName.fill(name);
        await inputLastName.fill(lastName);
        await inputZip.fill(zip);
        await continueButton.click();
        await finishButton.click();
        expect(label).toHaveText("THANK YOU FOR YOUR ORDER");
    }
}