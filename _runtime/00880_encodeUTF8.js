// _runtime/00880_encodeUTF8.js
import _mod881 from "metro/00881__.js";
import _mod882 from "metro/00882__.js";

export const encodeUTF8 = function encodeUTF8(json) {
  const obj = _mod881;
  const sentryCarrier = obj.getSentryCarrier();
  if (!sentryCarrier.encodePolyfill) {
    const tmpResult = _mod882;
    const encodePolyfill = tmpResult.useEncodePolyfill();
  }
  return sentryCarrier.encodePolyfill(json);
};
