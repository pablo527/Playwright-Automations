import {Page} from '@playwright/test'

export class HomePage{
    readonly page:Page;

    constructor(page:Page){
        this.page = page;
    }

    async addToCart(){
        const sortProducts = this.page.locator('[data-test="product_sort_container"]');
        const sortToPrice = this.page.locator('[value="za"]')
        const addBack = this.page.locator('[name="add-to-cart-sauce-labs-backpack"]');
        const addShirt = this.page.locator('[name="add-to-cart-sauce-labs-bolt-t-shirt"]');
        const addSnap = this.page.locator('[name="add-to-cart-sauce-labs-onesie"]')
        const goToCart = this.page.locator('[class="shopping_cart_link"]');

        await addBack.click();
        await addShirt.click();
        await addSnap.click();
        await goToCart.click();
    }
}