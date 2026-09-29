import { expect, test } from "vitest";
import { comboboxItem } from "./combobox.ts";

test("comboboxItem includes forced-colors active-item styles", () => {
  const result = comboboxItem();
  expect(result.class).toContain(
    "forced-colors:data-active-item:bg-[Highlight]",
  );
  expect(result.class).toContain(
    "forced-colors:data-active-item:text-[HighlightText]",
  );
});

test("comboboxItem with $highlighted includes forced-colors highlight styles", () => {
  const result = comboboxItem({ $highlighted: true });
  expect(result.class).toContain("forced-colors:bg-[Highlight]");
  expect(result.class).toContain("forced-colors:text-[HighlightText]");
});
