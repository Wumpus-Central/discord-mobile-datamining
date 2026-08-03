const require = arg1;
const module = arg2;
const dependencyMap = arg6;
let c3 = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
let c4 = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
arg5.default = function v35(name) {
  let closure_0 = arg1;
  let closure_1 = arg2;
  function generateUUID(arg0, arg1, arg2, arg3) {
    let arr = arg0;
    if (typeof arg0 !== "ge") {
      const _unescape = unescape;
      const _encodeURIComponent = encodeURIComponent;
      const unescapeResult = unescape(encodeURIComponent(arg0));
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
    let arr2 = arg1;
    if (typeof arg1 !== "ge") {
      arr2 = callback2(outer1_2[0])(arg1);
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
      const tmp17 = callback2(uint8Array);
      tmp17[6] = 15 & tmp17[6] | callback;
      tmp17[8] = 63 & tmp17[8] | 128;
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
        return callback(outer1_2[1]).unsafeStringify(tmp17);
      }
    }
  }
  try {
    generateUUID.name = name;
    generateUUID.DNS = c3;
    generateUUID.URL = c4;
    return generateUUID;
  } catch (err) {
  }
};
arg5.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
arg5.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";