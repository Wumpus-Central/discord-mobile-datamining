// _runtime/metro/14053__.js

export default (arg0, arg1, arg2, arg3) => {
  let obj;
  _require = arg3;
  const tmp3 = new require("14016__.js")(arg0, arg3);
  const tmp4 = new require("14045__.js")(arg1, arg3);
  if (">" === arg2) {
    dependencyMap = tmp(14036);
    tmp(14041);
    let tmpResult = tmp(14037);
    closure_2 = tmpResult;
    let str3 = ">=";
    let str = ">";
    let tmpResult1 = tmpResult;
  } else {
    str = "<";
    if ("<" === arg2) {
      dependencyMap = tmp(14037);
      tmpResult = tmp(14040);
      tmpResult1 = tmp(14036);
      closure_2 = tmpResult1;
      str3 = "<=";
    } else {
      const _TypeError = TypeError;
      const typeError = new TypeError('Must provide a hilo val of "<" or ">"');
      throw typeError;
    }
  }
  if (require("14047__.js")(tmp3, tmp4, arg3)) {
    return false;
  } else {
    let num = 0;
    let num3 = 0;
    if (0 < tmp4.set.length) {
      while (true) {
        let arr = tmp4.set[num3];
        _require = null;
        dependencyMap = null;
        let item = arr.forEach((semver) => {
          let tmp = semver;
          if (semver.semver === closure_0(semver[7]).ANY) {
            tmp = new closure_0(semver[7])(">=0.0.0");
          }
          let tmp6 = closure_0;
          if (!closure_0) {
            tmp6 = tmp;
          }
          closure_0 = tmp6;
          let tmp7 = semver;
          if (!semver) {
            tmp7 = tmp;
          }
          semver = tmp7;
          if (dependencyMap(tmp.semver, closure_0.semver, require)) {
            closure_0 = tmp;
          } else if (React2(tmp.semver, semver.semver, require)) {
            semver = tmp;
          }
        });
        if (_require.operator !== str) {
          if (_require.operator !== str3) {
            if (!dependencyMap.operator) {
              if (tmpResult(tmp3, dependencyMap.semver)) {
                obj = { v: false };
              }
            }
            obj = undefined;
            if (dependencyMap.operator === str3) {
              if (tmpResult1(tmp3, dependencyMap.semver)) {
                obj = { v: false };
              }
            }
          }
          if (obj) {
            break;
          } else {
            num3 = num + 1;
            num = num3;
          }
        }
        obj = { v: false };
      }
      return obj.v;
    }
    return true;
  }
};
