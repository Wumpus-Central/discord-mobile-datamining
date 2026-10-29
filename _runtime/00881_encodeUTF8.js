// === Module 881: encodeUTF8 ===

// Module 881 (encodeUTF8)
import _mod882 from "module_882" /* 882 */;
import globalEncodeFactory from "globalEncodeFactory" /* 883 */;

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