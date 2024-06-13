import { test, expect } from '@playwright/test';

const mail = 'linh.dang@ericsson.com';
const password = '123456';
const name = 'Phoebe Dang';

test('Register user', async ({page}) => {

  //Navigate to the page
  await page.goto('http://automationexercise.com/');

  //Verify title on Home page
  await expect(page).toHaveTitle('Automation Exercise');

  //Click on Login button in the header
  await page.locator('//a[contains(text(), "Login")]').click();

  //Check title on Login button
  await expect(page.locator('//h2[text() = "Login to your account"]')).toBeVisible;

  await page.locator('input[data-qa="login-email"]').fill('abc@mail.com');

  await page.locator('input[data-qa="login-password"]').fill(password);

  await page.locator('button[data-qa="login-button"]').click();

  await expect(page.locator('input[data-qa="login-password"] ~ p')).toHaveText('Your email or password is incorrect!'); 

});
