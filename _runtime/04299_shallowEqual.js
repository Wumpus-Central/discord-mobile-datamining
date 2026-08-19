// _runtime/04299_shallowEqual.js

export default function shallowEqual(obj, obj2, call) {
  if (!call) {
    if (obj === obj2) {
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
                if (0 < keys.length) {
                  while (tmp9(keys[num])) {
                    let tmp5 = obj[tmp3];
                    let tmp6 = obj2[tmp3];
                    if (!call) {
                      return false;
                    } else {
                      let call2 = call.call;
                      if (typeof call2 === "unknown") {
                        let call2Result = call(tmp5, tmp6, tmp3);
                      } else {
                        call2Result = call2(arg3, tmp5, tmp6, tmp3);
                      }
                    }
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
  } else {
    call = call.call;
    typeof call === "unknown" ? call(obj, obj2) : call(arg3, obj, obj2);
  }
};