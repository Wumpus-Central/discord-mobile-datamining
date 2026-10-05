// _runtime/metro/00882__.js
import RN_GLOBAL_OBJ from "../00692_RN_GLOBAL_OBJ.js";
import _mod881 from "00881__.js";
import utf8ToBytes from "../00883_utf8ToBytes.js";

function globalEncodeFactory(arg0) {
  let closure_0 = arg0;
  return (arg0) => {
    const encoder = new TextEncoder();
    return encoder.encode(arg0);
  };
}
function encodePolyfill(arr) {
  const obj = utf8ToBytes;
  const uint8Array = new Uint8Array(obj.utf8ToBytes(arr));
  return uint8Array;
}

export const useEncodePolyfill = () => {
  const obj = _mod881;
  const sentryCarrier = obj.getSentryCarrier();
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
};
export { globalEncodeFactory };
export { encodePolyfill };
