// _runtime/01263_v35.js
import unsafeStringify from "01259_unsafeStringify.js";
import _modDef1264 from "metro/01264__.js";

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;
let c3 = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
let c4 = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";

export default function v35(v3, arg1, arg2) {
  closure_0 = arg1;
  closure_1 = arg2;
  function generateUUID(str, str2, arg2, arg3) {
    let arr = str;
    if (typeof str === "string") {
      const _unescape = unescape;
      const _encodeURIComponent = encodeURIComponent;
      const unescapeResult = unescape(encodeURIComponent(str));
      const items = [];
      let num = 0;
      arr = items;
      if (0 < unescapeResult.length) {
        do {
          arr = items.push(unescapeResult.charCodeAt(num));
          num = num + 1;
          arr = items;
          length = unescapeResult.length;
        } while (num < length);
      }
    }
    let arr2 = str2;
    if (typeof str2 === "string") {
      arr2 = _modDef1264(str2);
    }
    length = undefined;
    if (null !== arr2) {
      if (undefined !== arr2) {
        length = arr2.length;
      }
    }
    if (16 !== length) {
      const _TypeError = TypeError;
      throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
    } else {
      const _Uint8Array = Uint8Array;
      const uint8Array = new Uint8Array(16 + arr.length);
      const result = uint8Array.set(arr2);
      const result1 = uint8Array.set(arr, arr2.length);
      const tmp17 = closure_1(uint8Array);
      tmp17[6] = (15 & tmp17[6]) | closure_0;
      tmp17[8] = (63 & tmp17[8]) | 128;
      if (arg2) {
        let num2 = arg3;
        if (!arg3) {
          num2 = 0;
        }
        let num4 = 0;
        do {
          arg2[num2 + num4] = tmp17[num4];
          num4 = num4 + 1;
        } while (num4 < 16);
        return arg2;
      } else {
        return unsafeStringify.unsafeStringify(tmp17);
      }
    }
  }
  try {
    generateUUID.name = v3;
    generateUUID.DNS = DNS;
    generateUUID.URL = _URL;
    return generateUUID;
  } catch (err) {}
}
export const DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
export const URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
