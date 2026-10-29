// _runtime/00881_encodeUTF8.js
import _mod882 from "metro/00882__.js";
import globalEncodeFactory from "00883_globalEncodeFactory.js";

require = arg1;
const dependencyMap = arg6;

export function encodeUTF8(json) {
  const sentryCarrier = _mod882.getSentryCarrier();
  if (!sentryCarrier.encodePolyfill) {
    const encodePolyfill = globalEncodeFactory.useEncodePolyfill();
    const tmpResult = globalEncodeFactory;
  }
  return sentryCarrier.encodePolyfill(json);
}
