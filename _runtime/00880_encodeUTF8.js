// === Module 880: encodeUTF8 ===

// Module 880 (encodeUTF8)
import _mod881 from "module_881" /* 881 */;
import globalEncodeFactory from "globalEncodeFactory" /* 882 */;

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