// === Module 234: defineLazyObjectProperty ===

// Module 234 (defineLazyObjectProperty)
import defineLazyObjectProperty from "defineLazyObjectProperty" /* 123 */;

const _navigator = global.navigator;
if (undefined === _navigator) {
  global.navigator = { product: "ReactNative" };
} else {
  const _module = defineLazyObjectProperty;
  const result = _module.polyfillObjectProperty(_navigator, "product", () => "ReactNative");
}