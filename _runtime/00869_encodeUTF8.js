// === Module 869: encodeUTF8 ===

// Module 869 (encodeUTF8)
import getSentryCarrier from "getSentryCarrier" /* 870 */;
import globalEncodeFactory from "globalEncodeFactory" /* 871 */;

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