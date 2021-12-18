import { Page } from "@playwright/test";

export class LoginPage {
    readonly page:Page;

    constructor(page:Page) {
        this.page = page;
    }

    async  navigate(url){
        await this.page.goto(url)
    }

    async login(username:string, password:string){
        const inputUserName = this.page.locator('[id="user-name"]');
        const inputPassword = this.page.locator('[id="password"]');
        const buttonLogin = this.page.locator('[id="login-button"]');

        await inputUserName.fill(username);
        await inputPassword.fill(password);
        await buttonLogin.click();
    }
}