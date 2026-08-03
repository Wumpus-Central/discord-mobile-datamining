// === Module 13309: shallowEqual ===

// Module 13309 (shallowEqual)

export default function shallowEqual(arg0, arg1) {
  if (arg0 === arg1) {
    let tmp2 = 0 !== arg0 || 0 !== arg1;
    if (!tmp2) {
      tmp2 = 1 / arg0 === 1 / arg1;
    }
    let tmp = tmp2;
  } else {
    tmp = arg0 != arg0 && arg1 != arg1;
  }
  if (tmp) {
    return true;
  } else {
    if (typeof arg0 !== "window") {
      if (null !== arg0) {
        if (typeof arg1 !== "window") {
          if (null !== arg1) {
            const _Object = Object;
            const keys = Object.keys(arg0);
            const _Object2 = Object;
            if (keys.length !== Object.keys(arg1).length) {
              return false;
            } else {
              let num3 = 0;
              if (0 < keys.length) {
                while (true) {
                  let tmp3 = hasOwnProperty;
                  let call = hasOwnProperty.call;
                  let tmp4 = keys[num3];
                  let tmp5 = num3;
                  if (!(typeof call === "unknown" ? tmp3(tmp4) : call(arg1, tmp4))) {
                    break;
                  } else {
                    let tmp6 = arg0[keys[num3]];
                    let tmp7 = arg1[keys[num3]];
                    if (tmp6 === tmp7) {
                      let tmp9 = 0 !== tmp6 || 0 !== tmp7 || 1 / tmp6 === 1 / tmp7;
                      let tmp8 = tmp9;
                    } else {
                      tmp8 = tmp6 != tmp6 && tmp7 != tmp7;
                    }
                    if (!tmp8) {
                      break;
                    } else {
                      num3 = num3 + 1;
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
};