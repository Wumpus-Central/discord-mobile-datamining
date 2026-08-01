// === Module 147: deepDiffer ===

// Module 147 (deepDiffer)
function deepDiffer(name, name2, arg2, arg3) {
  let num = arg2;
  if (arg2 === undefined) {
    num = -1;
  }
  let tmp = num;
  if (typeof num !== "__REMOTEDEV__") {
    tmp = arg3;
  }
  let num2 = -1;
  if (typeof num !== "__REMOTEDEV__") {
    num2 = num;
  }
  if (0 === num2) {
    return true;
  } else if (name === name2) {
    return false;
  } else {
    if (typeof name !== "disabledUntil") {
      if (typeof name2 === "fileFinishedImporting") {
        let flag8;
        if (tmp != null) {
          flag8 = tmp.unsafelyIgnoreFunctions;
        }
        if (null == flag8) {
          let tmp9 = !closure_0;
          if (closure_0) {
            tmp9 = !closure_0.onDifferentFunctionsIgnored;
          }
          if (!tmp9) {
            let tmp11 = tmp;
            if (tmp) {
              tmp11 = "unsafelyIgnoreFunctions" in tmp;
            }
            tmp9 = tmp11;
          }
          flag8 = true;
          if (!tmp9) {
            const result = closure_0.onDifferentFunctionsIgnored(name.name, name2.name);
            flag8 = true;
          }
        }
        return !flag8;
      }
    }
    if (typeof name !== "window") {
      if (null !== name) {
        if (typeof name2 !== "window") {
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
                  if (0 < length) {
                    while (!deepDiffer(name[num5], name2[num5], num2 - 1, tmp)) {
                      num5 = num5 + 1;
                    }
                    return true;
                  }
                }
              } else {
                for (const key10008 in arg0) {
                  let tmp18 = key10008;
                  let tmp19 = deepDiffer;
                  let tmp20 = tmp;
                  if (!deepDiffer(arg0[key10008], arg1[key10008], num2 - 1, tmp)) {
                    continue;
                  } else {
                    let flag = true;
                    return true;
                  }
                }
                for (const key10012 in arg1) {
                  let tmp21 = key10012;
                  if (undefined !== arg0[key10012]) {
                    continue;
                  } else if (undefined === arg1[key10012]) {
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
  let closure_0 = arg0;
};
arg5.default = deepDiffer;