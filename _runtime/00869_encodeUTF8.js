// === Module 869: encodeUTF8 ===

// Module 869 (encodeUTF8)
import _mod870 from "module_870" /* 870 */;
import globalEncodeFactory from "globalEncodeFactory" /* 871 */;

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