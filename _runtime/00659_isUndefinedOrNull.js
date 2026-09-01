// _runtime/00659_isUndefinedOrNull.js
function isUndefinedOrNull(arg0) {
  return null == arg0;
}
function isBuffer(obj) {
  let tmp = !obj;
  if (obj) {
    tmp = typeof obj !== "object";
  }
  if (!tmp) {
    tmp = typeof obj.length !== "number";
  }
  let tmp2 = !tmp;
  if (!tmp) {
    const copy = obj.copy;
    let tmp3 = typeof copy === "function";
    if (typeof copy === "function") {
      tmp3 = typeof obj.slice === "function";
    }
    if (tmp3) {
      tmp3 = !(obj.length > 0 && typeof obj[0] !== "number");
      const tmp4 = obj.length > 0 && typeof obj[0] !== "number";
    }
    tmp2 = tmp3;
  }
  return tmp2;
}
const fn = (time, obj) => {
  obj = arg2;
  if (!arg2) {
    obj = {};
  }
  let tmp = time === obj;
  if (tmp) {
    return tmp;
  } else {
    const _Date = Date;
    if (!(time instanceof Date)) {
      if (time) {
        if (obj) {
          let tmp3 = (function objEquiv(time, arg1, arg2) {
            if (!callback3(time)) {
              if (!callback3(arg1)) {
                if (time.prototype !== arg1.prototype) {
                  return false;
                } else if (callback(table[0])(time)) {
                  const tmp17 = tmp23(tmp24[0])(arg1);
                  if (!tmp17) {
                    return tmp17;
                  } else {
                    const call = closure_2.call;
                    const call2 = tmp18.call;
                    callback2(
                      typeof call === "unknown" ? closure_2() : call(time),
                      typeof call2 === "unknown" ? closure_2() : call2(arg1),
                      arg2,
                    );
                    const tmp19 = typeof call === "unknown" ? closure_2() : call(time);
                  }
                } else {
                  if (callback4(time)) {
                    if (tmp3(arg1)) {
                      if (time.length !== arg1.length) {
                        return false;
                      } else {
                        let num = 0;
                        if (0 < time.length) {
                          while (time[num] === arg1[num]) {
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
                      const arr2 = tmp23(tmp24[1])(arg1);
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
                          while (callback2(time[arr[diff1]], arg1[arr[diff1]], arg2)) {
                            diff1 = diff1 - 1;
                          }
                          return false;
                        }
                        return typeof time === typeof arg1;
                      }
                    } catch (err) {
                      return false;
                    }
                  }
                  tmp3 = callback4;
                }
              }
            }
            return false;
          })(time, obj, obj);
        }
      }
      if (!obj.strict) {
        tmp = time == obj;
      }
      tmp3 = tmp;
    } else {
      const _Date2 = Date;
    }
    time = time.getTime();
    tmp3 = time === obj.getTime();
  }
};

export default fn;
