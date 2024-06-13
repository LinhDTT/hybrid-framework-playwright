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
const mail = 'linh.dang6@ericsson.com';
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

  await expect(page.locator('//b[text()="Enter Account Information"]')).toBeVisible;

  //Step 9
  await page.locator('input#password').fill(password);

  const selectDay = await page.locator('select#days');
  
  await selectDay.selectOption({value: dob.day});

  const selectMonth = await page.locator('select#months');

  await selectMonth.selectOption({label: dob.month});

  const selectYear = await page.locator('select#years');

  await selectYear.selectOption({label: dob.year});

  //Step 10
  await page.locator('input#newsletter').check();

  //Step 11
  await page.locator('input#optin').check();

  //Step 12
  await page.locator('input#first_name').fill(firstName);

  await page.locator('input#last_name').fill(lastName);

  await page.locator('input#company').fill(company);

  await page.locator('input#address1').fill(address);

  const selectCountry = await page.locator('select#country');

  selectCountry.selectOption({label: 'Singapore'});

  await page.locator('input#state').fill(state);

  await page.locator('input#city').fill(city);

  await page.locator('input#zipcode').fill(zipcode);

  await page.locator('input#mobile_number').fill(phoneNumber);

  //Step 13
  await page.locator('button[data-qa="create-account"]').click();

  //Step 14
  await expect(page.locator('//b[text() = "Account Created!"]')).toBeVisible;

  //Step 15
  await page.locator('a.btn-primary').click();

  //Step 16
  await expect (page.locator('//a[contains(text(), "Logged in as")]')).toHaveText(' Logged in as ' + name);

  //Step 17
  // await page.locator('//a[text()=" Delete Account"]').click();

  // //Step 18
  // await expect (page.locator('h2[data-qa="account-deleted"] b')).toHaveText('Account Deleted!');

  // //Step 19
  // await page.locator('a[data-qa="continue-button"]').click();

});
