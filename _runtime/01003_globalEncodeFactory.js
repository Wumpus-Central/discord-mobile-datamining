// === Module 1003: globalEncodeFactory ===

// Module 1003 (globalEncodeFactory)
import utf8ToBytes from "utf8ToBytes" /* 1004 */;

require = arg1;
const dependencyMap = arg6;
function globalEncodeFactory(arg0) {
  closure_0 = arg0;
  return (arg0) => new TextEncoder().encode(arg0);
}
function encodePolyfill(arr) {
  const uint8Array = new Uint8Array(utf8ToBytes.utf8ToBytes(arr));
  return uint8Array;
}
arg5.useEncodePolyfill = () => {
  const sentryCarrier = TextEncoder(1002).getSentryCarrier();
  if (TextEncoder(813).RN_GLOBAL_OBJ.TextEncoder) {
    if (typeof globalEncodeFactory !== "function") {
      HermesBuiltin.throwTypeError();
    }
    TextEncoder = TextEncoder(813).RN_GLOBAL_OBJ.TextEncoder;
    sentryCarrier.encodePolyfill = (arg0) => new TextEncoder().encode(arg0);
  } else {
    sentryCarrier.encodePolyfill = encodePolyfill;
  }
};
arg5.globalEncodeFactory = globalEncodeFactory;
arg5.encodePolyfill = encodePolyfill;