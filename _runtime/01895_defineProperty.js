// _runtime/01895_defineProperty.js
import extend from "01896_extend.js";

let defineProperty;
const tmp = (() => {
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
  let tmp3 = globalThis;
  const _Object2 = Object;
  defineProperty = Object.defineProperty;
} else {
  defineProperty = (__defineGetter__, arg1, get) => {
    if ("get" in get) {
      if (__defineGetter__.__defineGetter__) {
        __defineGetter__.__defineGetter__(arg1, get.get);
      }
    }
    const hop = extend.hop;
    const callResult = hop.call(__defineGetter__, arg1) && !("value" in get);
    if (!callResult) {
      __defineGetter__[arg1] = get.value;
    }
  };
}
const tmp4 =
  Object.create ||
  ((arg0, obj) => {
    class F {
      constructor() {
        return;
      }
    }
    F.prototype = arg0;
    obj = Object.create(F.prototype);
    for (const key10008 in obj) {
      class F {
        constructor() {
          return;
        }
      }
      let hop = extend.hop;
      if (!hop.call(obj, key10008)) {
        continue;
      } else {
        let tmp3 = fn(obj, key10008, obj[key10008]);
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

export { defineProperty };
export const objCreate = tmp4;
