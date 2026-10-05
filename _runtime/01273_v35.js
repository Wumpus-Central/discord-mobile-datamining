// _runtime/01273_v35.js
import stringify from "01269_stringify.js";
import parseDefault from "01274_parse.js";

let c3 = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
let c4 = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";

export default function v35(v3, arg1, arg2) {
  let closure_0 = arg1;
  let closure_1 = arg2;
  function generateUUID(str, str2, arg2, arg3) {
    let length;
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
          let arr3 = items.push(unescapeResult.charCodeAt(num));
          num = num + 1;
          arr = items;
          length = unescapeResult.length;
        } while (num < length);
      }
    }
    let arr2 = str2;
    if (typeof str2 === "string") {
      arr2 = parseDefault(str2);
    }
    let length1;
    if (null !== arr2) {
      if (undefined !== arr2) {
        length1 = arr2.length;
      }
    }
    if (16 !== length1) {
      const _TypeError = TypeError;
      throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
    } else {
      const _Uint8Array = Uint8Array;
      const self = this;
      const self2 = this;
      const uint8Array = new Uint8Array(16 + arr.length);
      const result = uint8Array.set(arr2);
      const result1 = uint8Array.set(arr, arr2.length);
      const tmp16 = closure_1(uint8Array);
      tmp16[6] = (15 & tmp16[6]) | closure_0;
      tmp16[8] = (63 & tmp16[8]) | 128;
      if (arg2) {
        let num3 = 0;
        const tmp5 = arg3 || 0;
        do {
          arg2[tmp5 + num3] = tmp16[num3];
          num3 = num3 + 1;
        } while (num3 < 16);
        return arg2;
      } else {
        const obj = stringify;
        return obj.unsafeStringify(tmp16);
      }
    }
  }
  try {
    generateUUID.name = v3;
  } catch (err) {}
  generateUUID.DNS = DNS;
  generateUUID.URL = _URL;
  return generateUUID;
}
export const DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
export const URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
