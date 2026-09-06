// === Module 1266: v4 ===

// Module 1266 (v4)
import unsafeStringify from "unsafeStringify" /* 1259 */;
import _modDef1267 from "module_1267" /* 1267 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default function v4(arg0, arg1, arg2) {
  let obj = arg0;
  if (_modDef1267.randomUUID) {
    if (!arg1) {
      if (!obj) {
        return tmp(1267).randomUUID();
      }
    }
  }
  if (!obj) {
    obj = {};
  }
  let random = obj.random;
  if (!random) {
    random = obj.rng || tmp(1258)();
    const tmp3 = obj.rng || tmp(1258);
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