import { helloWorld } from "./answer";

describe("00001-warm-hello-world", () => {
	it("happy path", () => {
		const result = helloWorld();

		expect(result).toBe("Hello World!");
	});
});
