// _runtime/00234_polyfillObjectProperty.js
import polyfillObjectProperty from "00123_polyfillObjectProperty.js";

const _navigator = global.navigator;
if (undefined === _navigator) {
  global.navigator = { product: "ReactNative" };
} else {
  const _module = polyfillObjectProperty;
  const result = _module.polyfillObjectProperty(_navigator, "product", () => "ReactNative");
}