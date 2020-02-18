const { isBalanced } = require("./app");

describe("when two curly braces", () => {
	it("should be balanced", () => {
	  expect(isBalanced("{}")).toBe(true);
	});
  });
