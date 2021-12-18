import test, {expect, Page} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'

test('login successful', async ({page}) =>{
    const loginPage = new LoginPage(page)
    const title = page.locator('[class="title"]')

   await loginPage.navigate("https://www.saucedemo.com/");
   await loginPage.login('standard_user','secret_sauce');
   await expect(title).toHaveText("Products");
   
})

test('login failed', async ({page}) =>{
    const loginPage = new LoginPage(page)
    const button = page.locator('[data-test="error"]')

   await loginPage.navigate("https://www.saucedemo.com/");
   await loginPage.login('standard_user','secret_sace');
   await expect(button).toContainText("Epic sadface:");
   
})