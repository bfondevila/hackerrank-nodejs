const { myFunction } = require("./app");

describe("myFunction", () => {
	it("should return hello", () => {
	  expect(myFunction()).toBe("hello");
	});
  });
