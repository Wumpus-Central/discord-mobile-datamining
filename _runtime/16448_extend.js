// _runtime/16448_extend.js
import { extend } from "16449_extend.js";
const require = arg1;
const dependencyMap = arg6;
let tmp = (() => {
  try {
    const _Object = Object;
    return Object.defineProperty({}, "a", {});
  } catch (err) {
    return false;
  }
})();
if (!tmp) {
  let _Object = Object;
}
if (tmp) {
  const _Object2 = Object;
  let fn = Object.defineProperty;
} else {
  fn = (__defineGetter__, arg1, get) => {
    if ("get" in get) {
      if (__defineGetter__.__defineGetter__) {
        __defineGetter__.__defineGetter__(arg1, get.get);
      }
    }
    const hop = extend.hop;
    const call = hop.call;
    let tmp = typeof call === "unknown" ? hop(arg1) : call(__defineGetter__, arg1);
    if (tmp) {
      tmp = !("value" in get);
    }
    if (!tmp) {
      __defineGetter__[arg1] = get.value;
    }
  };
}
arg5.defineProperty = fn;
arg5.objCreate = Object.create || ((arg0, obj) => {
  class F {
    constructor() {
      return;
    }
  }
  F.prototype = arg0;
  obj = Object.create(F.prototype);
  for (const key10008 in arg1) {
    let tmp5 = key10008;
    let tmp6 = require;
    class F {
      constructor() {
        return;
      }
    }
    let hop = extend.hop;
    let call = hop.call;
    if (typeof call === "unknown") {
      let hopResult = hop(key10008);
    } else {
      hopResult = call(arg1, key10008);
    }
    if (!hopResult) {
      continue;
    } else {
      let tmp3 = fn;
      let tmp4 = fn(obj, key10008, arg1[key10008]);
      class F {
        constructor() {
          return;
        }
      }
    }
    continue;
  }
  return obj;
});