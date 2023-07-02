import AutoImport from "unplugin-auto-import/vite";
import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		// 添加全局api，类似jest
		globals: true,
	},
	plugins: [
		AutoImport({
			imports: ["vitest"],
			dts: true, // 生成ts声明文件
		}),
	],
});
