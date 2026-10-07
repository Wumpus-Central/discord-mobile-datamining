// _runtime/00880_encodeUTF8.js
import _mod881 from "metro/00881__.js";
import globalEncodeFactory from "00882_globalEncodeFactory.js";

require = arg1;
const dependencyMap = arg6;

export const encodeUTF8 = function encodeUTF8(json) {
  const sentryCarrier = _mod881.getSentryCarrier();
  if (!sentryCarrier.encodePolyfill) {
    const encodePolyfill = globalEncodeFactory.useEncodePolyfill();
    const tmpResult = globalEncodeFactory;
  }
  return sentryCarrier.encodePolyfill(json);
};
