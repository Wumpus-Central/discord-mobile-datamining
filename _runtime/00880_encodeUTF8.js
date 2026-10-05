// === Module 880: encodeUTF8 ===

// Module 880 (encodeUTF8)
import _mod881 from "module_881" /* 881 */;
import _mod882 from "module_882" /* 882 */;


export const encodeUTF8 = function encodeUTF8(json) {
  const obj = _mod881;
  const sentryCarrier = obj.getSentryCarrier();
  if (!sentryCarrier.encodePolyfill) {
    const tmpResult = _mod882;
    const encodePolyfill = tmpResult.useEncodePolyfill();
  }
  return sentryCarrier.encodePolyfill(json);
};