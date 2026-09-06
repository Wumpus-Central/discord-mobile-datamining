// _runtime/00871_globalEncodeFactory.js
import utf8ToBytes from "00872_utf8ToBytes.js";

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
  const sentryCarrier = TextEncoder(870).getSentryCarrier();
  if (TextEncoder(681).RN_GLOBAL_OBJ.TextEncoder) {
    if (typeof globalEncodeFactory !== "function") {
      HermesBuiltin.throwTypeError();
    }
    TextEncoder = TextEncoder(681).RN_GLOBAL_OBJ.TextEncoder;
    sentryCarrier.encodePolyfill = (arg0) => new TextEncoder().encode(arg0);
  } else {
    sentryCarrier.encodePolyfill = encodePolyfill;
  }
};
arg5.globalEncodeFactory = globalEncodeFactory;
arg5.encodePolyfill = encodePolyfill;
