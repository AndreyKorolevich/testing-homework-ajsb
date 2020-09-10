import puppetteer from 'puppeteer';

jest.setTimeout(30000); // default puppeteer timeout

describe('Check card`s number form', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:9000';

  beforeAll(async () => {
    browser = await puppetteer.launch({
      headless: false, // show gui
      slowMo: 100,
      devtools: true, // show devTools
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test('should add valide id for valid number', async () => {
    await page.goto(baseUrl);
    const form = await page.$('#form');
    const input = await form.$('#text');
    await input.type('371449635398431');
    const button = await form.$('#button');
    button.click();
    await page.waitForSelector('[data-id=valide]');
  });

  test('should add valide id for valid number', async () => {
    await page.goto(baseUrl);
    const form = await page.$('#form');
    const input = await form.$('#text');
    await input.type('3');
    const button = await form.$('#button');
    button.click();
    await page.waitForSelector('[data-id=invalide]');
  });
});
