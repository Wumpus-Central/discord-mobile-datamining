// _runtime/00234_defineLazyObjectProperty.js
import defineLazyObjectProperty from "00123_defineLazyObjectProperty.js";

const _navigator = global.navigator;
if (undefined === _navigator) {
  global.navigator = { product: "ReactNative" };
} else {
  const _module = defineLazyObjectProperty;
  const result = _module.polyfillObjectProperty(_navigator, "product", () => "ReactNative");
}
