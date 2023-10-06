import puppeteer from 'puppeteer';
import 'dotenv/config';

const browser = await puppeteer.connect({
    browserURL: 'http://localhost:9222'
});

const page = await browser.newPage();
await page.goto(`${process.env.WEBSITE_URL}`)

const title = await page.title();
console.log(title);