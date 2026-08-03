const _navigator = global.navigator;
if (undefined === _navigator) {
  global.navigator = { product: "ReactNative" };
} else {
  const _module = require("polyfillObjectProperty");
  const result = _module.polyfillObjectProperty(_navigator, "product", () => "ReactNative");
}