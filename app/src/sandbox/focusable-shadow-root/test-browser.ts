import { withFramework } from "#app/test-utils/preview.ts";

withFramework(import.meta.dirname, async ({ test }) => {
  // https://github.com/ariakit/ariakit/issues/7681
  test("sets data-focus-visible on keyboard focus inside shadow root", async ({
    page,
    q,
  }) => {
    const button = q.button("Shadow Button");
    await button.click();
    await test.expect(button).not.toHaveAttribute("data-focus-visible");

    await page.keyboard.press("Tab");
    await test.expect(button).toBeFocused();
    await test.expect(button).toHaveAttribute("data-focus-visible", "true");
  });
});
