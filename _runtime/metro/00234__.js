// === Module 234: ? ===

// Module 234
import polyfillObjectProperty from "polyfillObjectProperty" /* 123 */;

const _navigator = global.navigator;
if (undefined === _navigator) {
  global.navigator = { product: "ReactNative" };
} else {
  const _module = polyfillObjectProperty;
  const result = _module.polyfillObjectProperty(_navigator, "product", () => "ReactNative");
}