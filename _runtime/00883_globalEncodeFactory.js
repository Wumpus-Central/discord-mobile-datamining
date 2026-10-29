// === Module 883: globalEncodeFactory ===

// Module 883 (globalEncodeFactory)
import RN_GLOBAL_OBJ from "RN_GLOBAL_OBJ" /* 692 */;
import _mod882 from "module_882" /* 882 */;
import utf8ToBytes from "utf8ToBytes" /* 884 */;

require = arg1;
const dependencyMap = arg6;
function globalEncodeFactory(arg0) {
  closure_0 = arg0;
  return (arg0) => {
    const encoder = new TextEncoder();
    return encoder.encode(arg0);
  };
}
function encodePolyfill(arr) {
  const uint8Array = new Uint8Array(utf8ToBytes.utf8ToBytes(arr));
  return uint8Array;
}

export () => {
  const sentryCarrier = _mod882.getSentryCarrier();
  if (RN_GLOBAL_OBJ.RN_GLOBAL_OBJ.TextEncoder) {
    if (typeof globalEncodeFactory === "function") {
      const TextEncoder = RN_GLOBAL_OBJ.RN_GLOBAL_OBJ.TextEncoder;
      sentryCarrier.encodePolyfill = (arg0) => {
        const encoder = new TextEncoder();
        return encoder.encode(arg0);
      };
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    sentryCarrier.encodePolyfill = encodePolyfill;
  }
}
export { globalEncodeFactory };
export { encodePolyfill };