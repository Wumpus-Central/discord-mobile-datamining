// _runtime/00659_isUndefinedOrNull.js
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
    }
    tmp2 = tmp3;
  }
  return tmp2;
}
const fn = (time, getTime) => {
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
            if (!callback3(time)) {
              if (!callback3(getTime)) {
                if (time.prototype !== getTime.prototype) {
                  return false;
                } else if (callback(table[0])(time)) {
                  const tmp17 = callback(table[0])(getTime);
                  if (!tmp17) {
                    return tmp17;
                  } else {
                    const call = callback.call;
                    const call2 = callback.call;
                    callback2(typeof call === "unknown" ? callback() : call(time), typeof call2 === "unknown" ? callback() : call2(getTime), arg2);
                    const tmp19 = typeof call === "unknown" ? callback() : call(time);
                  }
                } else if (callback4(time)) {
                  if (callback4(getTime)) {
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
                    const arr = callback(table[1])(time);
                    const arr2 = callback(table[1])(getTime);
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
                        while (callback2(time[arr[diff1]], getTime[arr[diff1]], arg2)) {
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

export default fn;