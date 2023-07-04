export type ReverseString<T extends string> = T extends `${infer F}${infer R}` ? `${ReverseString<R>}${F}` : T;

describe("00002-easy-string-reverse -> type", () => {
	// TODO
});
