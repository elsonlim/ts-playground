import { sum } from "../src/sum";

describe("sum", () => {
  it("should add 2 numbers", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
