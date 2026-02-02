const js = require("@eslint/js");
const globals = require("globals");
const reactHooks = require("eslint-plugin-react-hooks");
const reactRefresh = require("eslint-plugin-react-refresh");
const tseslint = require("@typescript-eslint/eslint-plugin");
const jsxA11y = require("eslint-plugin-jsx-a11y");
const reactPlugin = require("eslint-plugin-react");
const prettierPlugin = require("eslint-plugin-prettier");
const { defineConfig, globalIgnores } = require("eslint/config");

module.exports = defineConfig([
  // Ignore build output
  globalIgnores(["dist", "node_modules"]),

  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      globals: globals.browser,
      parser: "@typescript-eslint/parser",
    },
    plugins: {
      "@typescript-eslint": tseslint,
      react: reactPlugin,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
      prettier: prettierPlugin,
      "react-refresh": reactRefresh,
    },
    extends: [
      js.configs.recommended, // base JS rules
      tseslint.configs.recommended, // TS rules
      reactHooks.configs.flat.recommended, // hooks rules
      reactRefresh.configs.vite, // Vite + React refresh
      reactPlugin.configs.recommended, // React rules
      jsxA11y.configs.recommended, // accessibility
      "plugin:prettier/recommended", // Prettier integration
    ],
    rules: {
      // General
      "no-console": "warn",
      "no-debugger": "warn",
      "prefer-const": "warn",
      "no-fallthrough": "error",

      // TypeScript (adjusted to match tsconfig strict rules)
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/strict-boolean-expressions": "warn",
      "@typescript-eslint/no-unnecessary-condition": "warn",

      // React
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",

      // Hooks
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // Accessibility
      "jsx-a11y/anchor-is-valid": "warn",

      // Prettier
      "prettier/prettier": "warn",
    },
  },
]);
