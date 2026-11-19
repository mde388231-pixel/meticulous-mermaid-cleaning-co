import { describe, expect, it } from "vitest";

import { testimonials } from "@/content/site";

describe("testimonial content", () => {
  it("does not publish placeholder names or review text", () => {
    expect(
      testimonials.every(({ name, body }) =>
        !name.trim().toLowerCase().startsWith("client name") &&
        !body.trim().toLowerCase().includes("your genuine client review"),
      ),
    ).toBe(true);
  });
});