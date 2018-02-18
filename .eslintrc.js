module.exports = {
  "extends": "airbnb",
  "plugins": [
      "react",
      "react-native",
      "import",
      "jsx-a11y"
  ],
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "no-underscore-dangle": ["error", { "allowAfterThis": true }]
  }
};