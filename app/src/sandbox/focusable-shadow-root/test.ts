import { press } from "@ariakit/test";
import { expect, test } from "vitest";

// https://github.com/ariakit/ariakit/issues/7681
test("sets data-focus-visible on keyboard focus inside shadow root", async () => {
  const host = document.querySelector("div > div");
  const shadowRoot = host?.shadowRoot;
  const button = shadowRoot?.querySelector<HTMLButtonElement>("button");
  expect(button).toBeTruthy();

  button?.focus();
  expect(button?.hasAttribute("data-focus-visible")).toBe(false);

  await press.ArrowDown(button, { altKey: true });
  expect(button?.getAttribute("data-focus-visible")).toBe("true");
});
