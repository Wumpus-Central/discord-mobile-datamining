// _runtime/00524_v4.js
const require = arg1;
const module = arg2;
const dependencyMap = arg6;
arg5.default = function v4(arg0, arg1, arg2) {
  let obj = arg0;
  if (module(525).randomUUID) {
    if (!arg1) {
      if (!obj) {
        return tmp(525).randomUUID();
      }
    }
  }
  if (!obj) {
    obj = {};
  }
  let random = obj.random;
  if (!random) {
    random = obj.rng || tmp(516)();
    const tmp3 = obj.rng || tmp(516);
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
    return require("00517_unsafeStringify.js") /* unsafeStringify */.unsafeStringify(random);
  }
};