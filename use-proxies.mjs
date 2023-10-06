import puppeteer from "puppeteer";
import 'dotenv/config'
import { anonymizeProxy, closeAnonymizedProxy } from 'proxy-chain'

const getContent = async ( url, proxyUrl ) => {
    const newProxyUrl = await anonymizeProxy(proxyUrl)

    const browser = await puppeteer.launch({
        headless : 'new',
        args : [`--proxy-url=${newProxyUrl}`]
    })

    const page = await browser.newPage();
    await page.goto(url)

    const content = await page.content()

    await page.close();
    await browser.close();

    await closeAnonymizedProxy(newProxyUrl)

    console.log(`IP Address : ${newProxyUrl}` )
} 

getContent( 'https://httpbin.org/ip',process.env.WEB_SHARE_PROXY )