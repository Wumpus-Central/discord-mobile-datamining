// === Module 843: merge ===

// Module 843 (merge)
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
function merge(arg0, obj) {
  let num = arg2;
  if (arg2 === undefined) {
    num = 2;
  }
  if (obj) {
    if (typeof obj === "object") {
      if (num > 0) {
        if (arg0) {
          const _Object = Object;
          if (0 === Object.keys(obj).length) {
            return arg0;
          }
        }
        obj = {};
        const merged = Object.assign(arg0);
        for (const key10016 in arg1) {
          let tmp10 = key10016;
          let _Object2 = Object;
          let call = hasOwnProperty.call;
          if (typeof call === "unknown") {
            let hasOwnPropertyResult = hasOwnProperty(key10016);
          } else {
            hasOwnPropertyResult = call(arg1, key10016);
          }
          if (!hasOwnPropertyResult) {
            continue;
          } else {
            let tmp8 = merge;
            obj[key10016] = merge(obj[key10016], arg1[key10016], num - 1);
            continue;
          }
          continue;
        }
        return obj;
      }
    }
  }
  return obj;
}
arg5.merge = merge;