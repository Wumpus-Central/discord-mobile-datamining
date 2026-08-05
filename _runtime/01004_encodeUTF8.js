import { getSentryCarrier } from "01005_getSentryCarrier.js";
import { globalEncodeFactory } from "01006_globalEncodeFactory.js";
// _runtime/01004_encodeUTF8.js
const require = arg1;
const dependencyMap = arg6;
arg5.encodeUTF8 = function encodeUTF8(json) {
  const sentryCarrier = getSentryCarrier /* getSentryCarrier */.getSentryCarrier();
  if (!sentryCarrier.encodePolyfill) {
    const encodePolyfill = globalEncodeFactory /* globalEncodeFactory */.useEncodePolyfill();
    const tmpResult = globalEncodeFactory /* globalEncodeFactory */;
  }
  return sentryCarrier.encodePolyfill(json);
};