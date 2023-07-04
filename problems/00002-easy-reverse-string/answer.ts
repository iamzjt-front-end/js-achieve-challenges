import { ReverseString } from "./index.test-d";

export function reverseString(str: string): ReverseString<typeof str> {
	return str.split("").reverse().join("");
}
