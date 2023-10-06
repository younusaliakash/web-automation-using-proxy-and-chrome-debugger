import puppeteer from 'puppeteer';
import 'dotenv/config'

const browser = await puppeteer.connect({
    browserWSEndpoint: `wss://chrome.browserless.io?token=${process.env.BROWSERLESSAPI}`
});

const page = await browser.newPage();
await page.goto(`${process.env.WEBSITE_URL}`)

const title = await page.title();
console.log(title);

await page.close();
await browser.close();