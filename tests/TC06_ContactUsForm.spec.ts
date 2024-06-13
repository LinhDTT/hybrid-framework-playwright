import { test, expect } from '@playwright/test';

const mail = 'linh.dang5@ericsson.com';
const password = '123456';
const name = 'Phoebe Dang';
const message = 'Hey have a good day!';

test('Register user', async ({page}) => {

  //Navigate to the page
  await page.goto('http://automationexercise.com/');

  //Verify title on Home page
  await expect(page).toHaveTitle('Automation Exercise');

  //Click Contact us
  await page.locator('//a[text() = " Contact us"]').click();

  await expect(page.locator('//h2[contains(text(), "Get In Touch")]')).toHaveText('Get In Touch');

  await page.locator('input[data-qa="name"]').fill(name);

  await page.locator('input[data-qa="email"]').fill(mail);

  await page.locator('textarea[data-qa="message"]').fill(message);

});
