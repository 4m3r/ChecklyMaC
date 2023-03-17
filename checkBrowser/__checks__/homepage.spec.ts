// @ts-ignore
import { test, expect } from '@playwright/test'

test('Checkly Homepage', async ({ page }) => {
  const response = await page.goto('https://4m3r.github.io/pfpage/index.html')
  expect(response?.status()).toBeLessThan(400)
  await expect(page).toHaveTitle(/KnowL/)
  await page.screenshot({ path: 'homepage.jpg' })
})
