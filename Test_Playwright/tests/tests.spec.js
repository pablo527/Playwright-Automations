const { test, expect } = require('@playwright/test');
const playwright = require('playwright')
require('dotenv').config('./.env')


test('basic test', async () => {
  // open browser
  const browser = await playwright.firefox.launch({
    headless: false
  });

  // context 
  const context = await browser.newContext({
    recordVideo: {
      dir: 'video/'
    }
  });

  //page
  const page = await context.newPage();
  const pass = process.env.PASS;
  const user = process.env.USER;

  await context.tracing.start({ screenshots: true, snapshots: true });
  await page.goto('https://github.com/login');
  await page.fill('input[name="login"]',user);
  await page.fill('input[name="password"]', pass);
  await page.click('input[name="commit"]');
  await page.click('img[class="avatar-user avatar avatar-small"]');
  await page.click('a[data-ga-click="Header, go to repositories, text:your repositories"]');
  await page.screenshot({ path: `example.png` });
  await page.click('a[class="text-center btn btn-primary ml-3"]');
  await page.fill('input[id="repository_name"]', 'Repo-test5');
  await page.click('button[class="btn-primary btn"]');
  const span = page.locator('class="login_logo"');
  await expect(span).toHaveText('Code')
  await context.tracing.stop({ path: 'trace.zip' });
});