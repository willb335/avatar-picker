module.exports = {
  env: { browser: true },
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module", // es6 import/export
    ecmaFeatures: {
      jsx: true
    }
  },
  parser: "babel-eslint", // class properties
  plugins: ["prettier", "react"],
  rules: {
    "no-unused-vars": ["warn", { varsIgnorePattern: "React" }],
    "no-console": "off",
    "no-undef": "off"
  }
};
