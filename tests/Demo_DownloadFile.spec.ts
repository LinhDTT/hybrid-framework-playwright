import { test, expect } from '@playwright/test';

const downloadFileName = 'modern-slavery-and-human-trafficking-statement.pdf';

test('Download  PDF file', async ({page, headless}) => {

   //Navigate to the page
   await page.goto('https://www.ericsson.com/en');

   await page.locator('a#CybotCookiebotDialogBodyButtonNecessary').click();
 
   await page.locator('a[title="Link to pdf document"]').scrollIntoViewIfNeeded();
  if(headless){

  //Using promise all
  const [download, click] = await Promise.all([
    page.waitForEvent('download'),
    page.waitForEvent('download')
  ])

  // const downloadPromise = page.waitForEvent('download');

  // await page.locator('a[title="Link to pdf document"]').click();

  // const download = await downloadPromise;

  expect(download.suggestedFilename()).toEqual(downloadFileName);

  }
  else{
    const [newPage] = await Promise.all([
      page.waitForEvent('load'),
      page.locator('a[title="Link to pdf document"]').click()
    ])

    newPage.on('response', async (Response) => {
      expect(Response.headers()['content-type']).toEqual('application/pdf');
    })

    await newPage.reload();
  }
});

