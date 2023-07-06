// @ts-check
const { test, expect } = require('@playwright/test');

const INPUT_S = ['General','Angel','Funds','investors'];

test.beforeEach(async ({ page }) => {
  await page.goto(''); //baseUrl defined in the config file
});

//TEST CASE 1
test('To open the web application and verify the header', async ({ page }) => {
  // Open the web application
  // Verify the header "Advice and answers from the bunch team" to be present on the web application
  await expect (page.getByRole('heading', { name: 'Advice and answers from the bunch team' })).toBeVisible();
});

