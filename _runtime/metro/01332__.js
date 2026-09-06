// _runtime/metro/01332__.js
import supported from "../01333_supported.js";

function isUndefinedOrNull(arg0) {
  return null == arg0;
}
function isBuffer(copy) {
  let tmp = !copy;
  if (copy) {
    tmp = typeof copy !== "object";
  }
  if (!tmp) {
    tmp = typeof copy.length !== "number";
  }
  let tmp2 = !tmp;
  if (!tmp) {
    copy = copy.copy;
    let tmp3 = typeof copy === "function";
    if (typeof copy === "function") {
      tmp3 = typeof copy.slice === "function";
    }
    if (tmp3) {
      tmp3 = !(copy.length > 0 && typeof copy[0] !== "number");
      const tmp4 = copy.length > 0 && typeof copy[0] !== "number";
    }
    tmp2 = tmp3;
  }
  return tmp2;
}
const exports = (time, getTime, arg2) => {
  let obj = arg2;
  if (!arg2) {
    obj = {};
  }
  let tmp = time === getTime;
  if (tmp) {
    return tmp;
  } else {
    const _Date = Date;
    if (!(time instanceof Date)) {
      if (time) {
        if (getTime) {
          let tmp3 = (function objEquiv(time, getTime, arg2) {
            if (!isUndefinedOrNull(time)) {
              if (!isUndefinedOrNull(getTime)) {
                if (time.prototype !== getTime.prototype) {
                  return false;
                } else if (supported(time)) {
                  const tmp17 = tmp23(tmp24[0])(getTime);
                  if (!tmp17) {
                    return tmp17;
                  } else {
                    const call = slice.call;
                    const call2 = tmp18.call;
                    exports(
                      typeof call === "unknown" ? slice() : call(time),
                      typeof call2 === "unknown" ? slice() : call2(getTime),
                      arg2,
                    );
                    const tmp19 = typeof call === "unknown" ? slice() : call(time);
                  }
                } else {
                  if (isBuffer(time)) {
                    if (tmp3(getTime)) {
                      if (time.length !== getTime.length) {
                        return false;
                      } else {
                        let num = 0;
                        if (0 < time.length) {
                          while (time[num] === getTime[num]) {
                            num = num + 1;
                          }
                          return false;
                        }
                        return true;
                      }
                    } else {
                      return false;
                    }
                  } else {
                    try {
                      const arr = tmp23(tmp24[1])(time);
                      const arr2 = tmp23(tmp24[1])(getTime);
                      if (arr.length != arr2.length) {
                        return false;
                      } else {
                        const sorted = arr.sort();
                        const sorted1 = arr2.sort();
                        let diff = arr.length - 1;
                        if (0 <= diff) {
                          while (arr[diff] == arr2[diff]) {
                            diff = diff - 1;
                          }
                          return false;
                        }
                        let diff1 = arr.length - 1;
                        if (0 <= diff1) {
                          while (exports(time[arr[diff1]], getTime[arr[diff1]], arg2)) {
                            diff1 = diff1 - 1;
                          }
                          return false;
                        }
                        return typeof time === typeof getTime;
                      }
                    } catch (err) {
                      return false;
                    }
                  }
                  tmp3 = isBuffer;
                }
              }
            }
            return false;
          })(time, getTime, obj);
        }
      }
      if (!obj.strict) {
        tmp = time == getTime;
      }
    } else {
      const _Date2 = Date;
    }
    time = time.getTime();
    tmp3 = time === getTime.getTime();
  }
};

export default exports;
