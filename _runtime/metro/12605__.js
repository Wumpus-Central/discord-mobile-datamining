// _runtime/metro/12605__.js
let hasOwnProperty;

function merge(arg0, obj) {
  let num = arg2;
  if (arg2 === undefined) {
    num = 2;
  }
  const tmp = obj;
  if (tmp) {
    if (typeof obj === "object") {
      if (num > 0) {
        const tmp9 = arg0;
        if (tmp9) {
          if (obj) {
            const _Object = Object;
            if (0 === Object.keys(obj).length) {
              return arg0;
            }
          }
        }
        obj = {};
        const merged = Object.assign(arg0);
        for (const key10016 in obj) {
          let _Object2 = Object;
          hasOwnProperty = Object.prototype.hasOwnProperty;
          if (!hasOwnProperty.call(obj, key10016)) {
            continue;
          } else {
            obj[key10016] = merge(obj[key10016], obj[key10016], num - 1);
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

export { merge };
