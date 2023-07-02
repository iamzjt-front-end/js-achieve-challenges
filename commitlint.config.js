/**
 * 约定git提交规范
 * types:[空格]message
 * e.g. feat: 这是一个新的feature
 */

const types = [
	"feat", // ✨ Features | 新功能
	"fix", // 🐛 Bug Fixes | Bug 修复
	"init", // 🎉 Init | 初始化
	"docs", // ✏️ Documentation | 文档
	"style", // 💄 Styles | 风格
	"refactor", // ♻️ Code Refactoring | 代码重构
	"perf", // ⚡ Performance Improvements | 性能优化
	"test", // ✅ Tests | 测试
	"revert", // ⏪ Revert | 回退
	"build", // 📦 Build System | 打包构建
	"chore", // 🚀 Chore | 构建/工程依赖/工具
	"ci", // 👷 Continuous Integration | CI 配置
	"release", // 🎯 release | 发布
];

const commitTypeRules = [2, "always", types];

module.exports = {
	extends: ["@commitlint/config-conventional"],
	rules: {
		"type-enum": commitTypeRules,
	},
};
