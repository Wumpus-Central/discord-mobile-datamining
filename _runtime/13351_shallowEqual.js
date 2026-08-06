// _runtime/13351_shallowEqual.js

export default function shallowEqual(obj, obj2) {
  if (obj === obj2) {
    let tmp2 = 0 !== obj || 0 !== obj2;
    if (!tmp2) {
      tmp2 = 1 / obj === 1 / obj2;
    }
    let tmp = tmp2;
  } else {
    tmp = obj != obj && obj2 != obj2;
  }
  if (tmp) {
    return true;
  } else {
    if (typeof obj === "object") {
      if (null !== obj) {
        if (typeof obj2 === "object") {
          if (null !== obj2) {
            const _Object = Object;
            const keys = Object.keys(obj);
            const _Object2 = Object;
            if (keys.length !== Object.keys(obj2).length) {
              return false;
            } else {
              let num3 = 0;
              if (0 < keys.length) {
                while (true) {
                  let tmp3 = hasOwnProperty;
                  let call = hasOwnProperty.call;
                  let tmp4 = keys[num3];
                  let tmp5 = num3;
                  if (!(typeof call === "unknown" ? tmp3(tmp4) : call(obj2, tmp4))) {
                    break;
                  } else {
                    let tmp6 = obj[keys[num3]];
                    let tmp7 = obj2[keys[num3]];
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