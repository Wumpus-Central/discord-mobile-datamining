// === Module 4790: shallowEqual ===

// Module 4790 (shallowEqual)
let hasOwnProperty;


export default function shallowEqual(obj, obj2, call, arg3) {
  let callResult;
  if (call) {
    callResult = call.call(arg3, obj, obj2);
  }
  if (undefined !== callResult) {
    return callResult;
  } else if (obj === obj2) {
    return true;
  } else {
    if (typeof obj === "object") {
      if (obj) {
        if (typeof obj2 === "object") {
          if (obj2) {
            const _Object = Object;
            const keys = Object.keys(obj);
            const _Object2 = Object;
            if (keys.length !== Object.keys(obj2).length) {
              return false;
            } else {
              const _Object3 = Object;
              hasOwnProperty = Object.prototype.hasOwnProperty;
              let num = 0;
              if (0 < keys.length) {
                while (tmp8(keys[num])) {
                  let tmp5 = obj[tmp3];
                  let tmp6 = obj2[tmp3];
                  let callResult1;
                  if (call) {
                    callResult1 = call.call(arg3, tmp5, tmp6, tmp3);
                  }
                  if (false !== callResult1) {
                    if (undefined !== callResult1) {
                      num = num + 1;
                    }
                  }
                  return false;
                }
                return false;
              }
              return true;
            }
          }
        }
      }
    }
    return false;
  }
};