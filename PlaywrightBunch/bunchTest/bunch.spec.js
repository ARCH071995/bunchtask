// @ts-check
const { test, expect } = require('@playwright/test');

const INPUT_S = ['General','Angel','Funds','investors'];

test.beforeEach(async ({ page }) => {
  await page.goto(''); //baseUrl defined in the config file
});

//TEST CASE 1 :- To Check and verify the functionalities of the Bunch Application

test('To open the web application and verify the header', async ({ page }) => {
  // Open the web application
  // Verify the header "Advice and answers from the bunch team" to be present on the web application
  await expect (page.getByRole('heading', { name: 'Advice and answers from the bunch team' })).toBeVisible();
});


test('To click all tiles alternatively, search and navigate', async ({ page }) => {

  //Click the General Tile
  await page.getByRole('link', { name: 'General General information about bunch and its product offering.' }).click();
  // Verify the URL to contain general page.
  await expect(page).toHaveURL('/help/en/collections/13159-general');
  //Search using input for General Tile
  const search_Field = page.getByPlaceholder('Search for articles...');
  await search_Field.fill(INPUT_S[0]);
  await page.keyboard.press('Enter');
  //Click on the first result from the list
  const item_one = page.getByText('What is a trust?', { exact: true });
  await item_one.click();

  //.................Go back to homePage
  await page.getByTestId('header').getByRole('link', { name: 'bunch Help Center' }).click();

  //Click the Angel Tile
  await page.getByRole('link', { name: 'Everything you need to know about the Angel Roll-Up and its processes.' }).click();
  // Expects the URL to contain Angel page.
  await expect(page).toHaveURL('/help/en/collections/13168-angel-roll-ups');
  //Search using input for Angel Tile
  const search_Fieldone = page.getByPlaceholder('Search for articles...');
  await search_Fieldone.fill(INPUT_S[1]);
  await page.keyboard.press('Enter');
  //Click on the first result from the list
  const item_two = page.getByText(' Roll-Up product work?', { exact: true });
  await item_two.click();
  //Search using another input in Angel Tile
  const search_Fieldtwo = page.getByPlaceholder('Search for articles...');
  await search_Fieldtwo.fill(INPUT_S[2]);
  await page.keyboard.press('Enter');
  //Click on the second result from the list
  const item_three = page.getByText('Yes, we can help you with the setup and administration of your ', { exact: true });
  await item_three.click();
  //Verify the Navigated Url
  await expect(page).toHaveURL('https://www.bunch.capital/help/en/articles/72830-if-i-want-to-open-a-fund-in-europe-can-bunch-help-me');

  //.................Go back to homePage
  await page.getByTestId('header').getByRole('link', { name: 'bunch Help Center' }).click();

  //Click the syndicate Tile
  await page.getByRole('link', { name: 'Everything you need to know about our syndicates and its processes.' }).click();
  // Verify the URL to contain syndicate page.
  await expect(page).toHaveURL('/help/en/collections/13174-syndicates-spvs');
  //Search using input for syndicate Tile
  const search_Fieldthree = page.getByPlaceholder('Search for articles...');
  await search_Fieldthree.fill(INPUT_S[3]);
  await page.keyboard.press('Enter');
  //Verify the Navigated Url to the search results of the entered input
  await expect(page).toHaveURL('/help/en/?q='+INPUT_S[3]);

  //.................Go back to homePage
  await page.getByTestId('header').getByRole('link', { name: 'bunch Help Center' }).click();

  //Click the funds Tile
  await page.getByRole('link', { name: 'Everything you need to know about setting up your fund on bunch.' }).click();
  // Verify the URL to contain fund article page.
  await expect(page).toHaveURL('/help/en/collections/13180-funds');
});