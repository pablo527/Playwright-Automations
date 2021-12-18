import {test} from '@playwright/test'
import playwright from 'playwright'
import { CartPage } from '../pages/CartPage';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';


test('shopping products e2e', async() => {
    const browser = await playwright.firefox.launch({
        headless:false
    })

    const context = await browser.newContext({
        recordVideo: {
            dir: 'video/'
        }
    });
    const page = await context.newPage();
    const loginPage = new LoginPage(page);
    const home = new HomePage(page);
    const cart = new CartPage(page);
   
    await loginPage.navigate("https://www.saucedemo.com/");
    await loginPage.login("standard_user","secret_sauce");
    await page.screenshot({ path: `img/example.png` })
    await home.addToCart();
    await page.screenshot({ path: `img/example1.png` })
    await cart.confirmShop("pepe","toro","12");
    await page.screenshot({path:`img/example2.png` })
    await browser.close();
})
