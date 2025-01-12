import svelteParser from "svelte-eslint-parser";
import tsParser from "@typescript-eslint/parser";
import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
        extraFileExtensions: [".svelte"],
      },
    },
  },
  {
    files: ["**/*.svelte", "*.svelte"],
    languageOptions: {
      parser: svelteParser,
      // Parse the `<script>` in `.svelte` as TypeScript by adding the following configuration.
      parserOptions: {
        parser: tsParser,
      },
    },
  },
];