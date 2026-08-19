// === Module 1004: encodeUTF8 ===

// Module 1004 (encodeUTF8)
import getSentryCarrier from "getSentryCarrier" /* 1005 */;
import globalEncodeFactory from "globalEncodeFactory" /* 1006 */;

require = arg1;
const dependencyMap = arg6;
arg5.encodeUTF8 = function encodeUTF8(json) {
  const sentryCarrier = getSentryCarrier.getSentryCarrier();
  if (!sentryCarrier.encodePolyfill) {
    const encodePolyfill = globalEncodeFactory.useEncodePolyfill();
    const tmpResult = globalEncodeFactory;
  }
  return sentryCarrier.encodePolyfill(json);
};