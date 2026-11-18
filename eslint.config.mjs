import js from "@eslint/js";
import globals from "globals";

export default [
  {
    files: ["**/*.js"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
];
