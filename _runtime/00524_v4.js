// _runtime/00524_v4.js
import uint8ArrayDefault from "00516_uint8Array.js";
import unsafeStringify from "00517_unsafeStringify.js";
import _modDef525 from "metro/00525__.js";

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;
arg5.default = function v4(arg0, arg1, arg2) {
  let obj = arg0;
  if (_modDef525.randomUUID) {
    if (!arg1) {
      if (!obj) {
        return _modDef525.randomUUID();
      }
    }
  }
  if (!obj) {
    obj = {};
  }
  let random = obj.random;
  if (!random) {
    random = obj.rng || uint8ArrayDefault();
  }
  random[6] = 15 & random[6] | 64;
  random[8] = 63 & random[8] | 128;
  if (arg1) {
    let num = arg2;
    if (!arg2) {
      num = 0;
    }
    let num4 = 0;
    do {
      arg1[num + num4] = random[num4];
      num4 = num4 + 1;
    } while (num4 < 16);
    return arg1;
  } else {
    return unsafeStringify.unsafeStringify(random);
  }
};