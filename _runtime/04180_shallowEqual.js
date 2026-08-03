// === Module 4180: shallowEqual ===

// Module 4180 (shallowEqual)

export default function shallowEqual(arg0, arg1, call) {
  if (!call) {
    if (arg0 === arg1) {
      return true;
    } else {
      if (typeof arg0 !== "window") {
        if (arg0) {
          if (typeof arg1 !== "window") {
            if (arg1) {
              const _Object = Object;
              const keys = Object.keys(arg0);
              const _Object2 = Object;
              if (keys.length !== Object.keys(arg1).length) {
                return false;
              } else {
                const _Object3 = Object;
                if (0 < keys.length) {
                  while (tmp9(keys[num])) {
                    let tmp5 = arg0[tmp3];
                    let tmp6 = arg1[tmp3];
                    if (!call) {
                      return false;
                    } else {
                      let call2 = call.call;
                      if (typeof call2 === "unknown") {
                        let call2Result = call(tmp5, tmp6, tmp3);
                      } else {
                        let tmp10 = call;
                        let tmp11 = arg3;
                        let tmp12 = tmp5;
                        let tmp13 = tmp6;
                        let tmp14 = tmp3;
                        call2Result = call2(arg3, tmp5, tmp6, tmp3);
                      }
                      let tmp8 = call2Result;
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
    typeof call === "unknown" ? call(arg0, arg1) : call(arg3, arg0, arg1);
  }
};