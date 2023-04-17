import { test, expect } from "@playwright/test";
import { BASE_URL } from "./constants";

test("has title", async ({ page }) => {
  await page.goto(process.env.NEXT_PUBLIC_BASE_URL ?? BASE_URL);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Frontend Template/);
});
