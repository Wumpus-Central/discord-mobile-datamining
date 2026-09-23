// _runtime/metro/14409__.js
const require = globalThis.__r;

export default (arg0, arg1, arg2, arg3) => {
  let obj;
  _require = arg3;
  let tmp3 = new require("14372__.js")(arg0, arg3);
  const tmp4 = new require("14401__.js")(arg1, arg3);
  if (">" === arg2) {
    dependencyMap = tmp(14392);
    let tmpResult = tmp(14397);
    const tmpResult3 = tmp(14393);
    closure_2 = tmpResult3;
    let str3 = ">=";
    let str = ">";
    let tmpResult4 = tmpResult3;
  } else {
    str = "<";
    if ("<" === arg2) {
      dependencyMap = tmp(14393);
      tmpResult = tmp(14396);
      tmpResult4 = tmp(14392);
      closure_2 = tmpResult4;
      str3 = "<=";
    } else {
      const _TypeError = TypeError;
      const typeError = new TypeError('Must provide a hilo val of "<" or ">"');
      throw typeError;
    }
  }
  if (require("14403__.js")(tmp3, tmp4, arg3)) {
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
            tmp = new tmp2(tmp3[7])(">=0.0.0");
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
          tmp2 = closure_0;
          tmp3 = semver;
        });
        if (_require.operator !== str) {
          if (_require.operator !== str3) {
            if (!dependencyMap.operator) {
              if (tmpResult(tmp3, dependencyMap.semver)) {
                obj = { v: false };
              }
            }
            let obj2;
            if (dependencyMap.operator === str3) {
              if (tmpResult4(tmp3, dependencyMap.semver)) {
                obj2 = { v: false };
              }
            }
            obj = obj2;
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
