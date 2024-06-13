import { test, expect } from '@playwright/test';

const title = 'Regester new user';
const name = 'Phoebe Dang';
const firstName = "Linh";
const lastName = 'Dang';
const company = 'Opti';
const address = 'Duong Noi urban';
const state = 'Ha Dong ban';
const city = 'Hanoi';
const zipcode = '84';
const phoneNumber = '0901 788 910';
const mail = 'linh.dang5@ericsson.com';
const password = '123456';
const dob = {
  day: '17',
  month: 'April',
  year: '1990'
};

test('Register user', async ({page}) => {
  await page.goto('http://automationexercise.com/');

  await expect(page).toHaveTitle('Automation Exercise');

  await page.locator('//a[contains(text(), "Login")]').click();

  await expect(page.locator('//h2[text() = "New User Signup!"]')).toBeVisible;

  await page.locator('input[data-qa="signup-name"]').fill(name);

  await page.locator('input[data-qa="signup-email"]').fill(mail);

  await page.locator('button[data-qa="signup-button"]').click();

  await expect(page.locator('//p[text() = "Email Address already exist!"]')).toBeVisible;


});
