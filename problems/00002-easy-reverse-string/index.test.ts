import { reverseString } from "./answer";

describe("00002-easy-string-reverse", () => {
	it("should return the reversed string", () => {
		expect(reverseString("hello")).toBe("olleh");
	});
});
