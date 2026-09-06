// _runtime/00869_encodeUTF8.js
import _mod870 from "metro/00870__.js";
import globalEncodeFactory from "00871_globalEncodeFactory.js";

require = arg1;
const dependencyMap = arg6;

export const encodeUTF8 = function encodeUTF8(json) {
  const sentryCarrier = _mod870.getSentryCarrier();
  if (!sentryCarrier.encodePolyfill) {
    const encodePolyfill = globalEncodeFactory.useEncodePolyfill();
    const tmpResult = globalEncodeFactory;
  }
  return sentryCarrier.encodePolyfill(json);
};
