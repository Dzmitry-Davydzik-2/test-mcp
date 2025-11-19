import { test, expect } from '@playwright/test';

test('Verify Client Work page', async ({ page }) => {
  // Step 1: Navigate to the EPAM homepage
  await page.goto('https://www.epam.com/');

  // Step 2: Navigate directly to the Services page
  await page.goto('https://www.epam.com/services');

  // Step 3: Click on the "Explore Our Client Work" link
  await page.click('text=Explore Our Client Work');

  // Step 4: Verify that the "Client Work" text is visible on the page
  const isVisible = await page.evaluate(() => document.body.innerText.includes('Client Work'));
  expect(isVisible).toBeTruthy();

  // Close the browser
  await page.close();
});