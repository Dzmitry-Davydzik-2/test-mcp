import { test, expect } from '@playwright/test';

test('Verify GLOBAL HEADQUARTERS text on Contact Us page', async ({ page }) => {
  // Step 1: Navigate to the EPAM homepage
  await page.goto('https://www.epam.com/');

  // Step 2: Click on the "Contact us" button in the header
  await page.locator('a[href="https://www.epam.com/about/who-we-are/contact"]').click();

  // Step 3: Verify that the "GLOBAL HEADQUARTERS" text is visible on the page
  await expect(page.locator('text=GLOBAL HEADQUARTERS')).toBeVisible();
});