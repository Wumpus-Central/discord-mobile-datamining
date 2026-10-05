// _runtime/00147_deepDiffer.js
function deepDiffer(name, name2, arg2, arg3) {
  let num = arg2;
  if (arg2 === undefined) {
    num = -1;
  }
  let tmp = num;
  if (typeof num === "number") {
    tmp = arg3;
  }
  let num2 = -1;
  if (typeof num === "number") {
    num2 = num;
  }
  if (0 === num2) {
    return true;
  } else if (name === name2) {
    return false;
  } else {
    if (typeof name === "function") {
      if (typeof name2 === "function") {
        let flag8;
        if (tmp != null) {
          flag8 = tmp.unsafelyIgnoreFunctions;
        }
        if (null == flag8) {
          let tmp9 = !React;
          if (React) {
            tmp9 = !React.onDifferentFunctionsIgnored;
          }
          if (!tmp9) {
            tmp9 = tmp && "unsafelyIgnoreFunctions" in tmp;
            const tmp11 = tmp && "unsafelyIgnoreFunctions" in tmp;
          }
          flag8 = true;
          if (!tmp9) {
            const result = React.onDifferentFunctionsIgnored(name.name, name2.name);
            flag8 = true;
          }
        }
        return !flag8;
      }
    }
    if (typeof name === "object") {
      if (null !== name) {
        if (typeof name2 === "object") {
          if (null !== name2) {
            if (name.constructor !== name2.constructor) {
              return true;
            } else {
              const _Array = Array;
              if (Array.isArray(name)) {
                if (name2.length !== name.length) {
                  return true;
                } else {
                  let num5 = 0;
                  if (0 < name.length) {
                    while (!deepDiffer(name[num5], name2[num5], num2 - 1, tmp)) {
                      num5 = num5 + 1;
                    }
                    return true;
                  }
                }
              } else {
                for (const key10008 in name) {
                  if (!deepDiffer(name[key10008], name2[key10008], num2 - 1, tmp)) {
                    continue;
                  } else {
                    let flag = true;
                    return true;
                  }
                }
                for (const key10012 in name2) {
                  if (undefined !== name[key10012]) {
                    continue;
                  } else if (undefined === name2[key10012]) {
                    continue;
                  } else {
                    let flag2 = true;
                    return true;
                  }
                  continue;
                }
              }
              return false;
            }
          }
        }
        return true;
      }
    }
    return name !== name2;
  }
}
deepDiffer.unstable_setLogListeners = function unstable_setLogListeners(arg0) {
  let closure_1_0 = arg0;
};

export default deepDiffer;
