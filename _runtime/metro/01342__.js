// === Module 1342: ? ===

// Module 1342
import _mod1343 from "module_1343" /* 1343 */;
import _mod1344 from "module_1344" /* 1344 */;

function isUndefinedOrNull(getTime) {
  return null == getTime;
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
  if (tmp2) {
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
exports = (getTime, getTime2, arg2) => {
  function objEquiv(getTime, getTime2, arg2) {
    if (!isUndefinedOrNull(getTime)) {
      if (!isUndefinedOrNull(getTime2)) {
        if (getTime.prototype !== getTime2.prototype) {
          return false;
        } else if (_mod1343(getTime)) {
          let tmp17 = _mod1343(getTime2);
          if (tmp17) {
            const callResult = slice.call(getTime);
            tmp17 = exports(callResult, slice.call(getTime2), arg2);
          }
          return tmp17;
        } else if (isBuffer(getTime)) {
          if (isBuffer(getTime2)) {
            if (getTime.length !== getTime2.length) {
              return false;
            } else {
              let num = 0;
              if (0 < getTime.length) {
                while (getTime[num] === getTime2[num]) {
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
            const arr = _mod1344(getTime);
            const arr2 = _mod1344(getTime2);
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
                while (exports(getTime[arr[diff1]], getTime2[arr[diff1]], arg2)) {
                  diff1 = diff1 - 1;
                }
                return false;
              }
              return typeof getTime === typeof getTime2;
            }
          } catch (err) {
            return false;
          }
        }
      }
    }
    return false;
  }
  const tmp = arg2 || {};
  let tmp2 = getTime === getTime2;
  let tmp3 = tmp2;
  if (!tmp3) {
    let tmp5;
    const _Date = Date;
    if (getTime instanceof Date) {
      const _Date2 = Date;
      if (getTime2 instanceof Date) {
        const time = getTime.getTime();
        tmp5 = time === getTime2.getTime();
      }
      tmp3 = tmp5;
    }
    if (getTime) {
      if (getTime2) {
        tmp5 = objEquiv(getTime, getTime2, tmp);
      }
    }
    if (!tmp.strict) {
      tmp2 = getTime == getTime2;
    }
    tmp5 = tmp2;
  }
  return tmp3;
};

export default exports;