
export default (arg0, arg1) => {
  let require;
  let obj = new require(13017) /* Range */(arg0, arg1);
  const tmp3 = new require(12988) /* SemVer */("0.0.0");
  if (obj.test(tmp3)) {
    return tmp3;
  } else {
    const tmp6 = new tmp(12988)("0.0.0-0");
    if (obj.test(tmp6)) {
      return tmp6;
    } else {
      let num = 0;
      let num3 = 0;
      let tmp9 = null;
      let tmp10 = null;
      if (0 < obj.set.length) {
        do {
          let arr = obj.set[num3];
          require = null;
          let item = arr.forEach((semver) => {
            const obj = new outer1_0(outer1_1[1])(semver.semver.version);
            const operator = semver.operator;
            if (">" === operator) {
              if (0 === obj.prerelease.length) {
                obj.patch = obj.patch + 1;
              } else {
                const prerelease = obj.prerelease;
                prerelease.push(0);
              }
              obj.raw = obj.format();
            } else {
              if ("" !== operator) {
                if (">=" !== operator) {
                  if ("<" !== operator) {
                    if ("<=" !== operator) {
                      const _Error = Error;
                      const _HermesInternal = HermesInternal;
                      const error = new Error("Unexpected operation: " + semver.operator);
                      throw error;
                    }
                  }
                }
              }
              let tmp4 = obj;
              if (obj) {
                tmp4 = !outer1_0(outer1_1[2])(obj, obj);
              }
            }
          });
          let tmp12 = require;
          let tmp13 = !require;
          let tmp14 = tmp9;
          let tmp15 = num;
          if (require) {
            let tmp16 = tmp14;
            if (tmp14) {
              let tmp17 = require;
              let tmp18 = dependencyMap;
              let tmp19 = require;
              tmp16 = !require(13008) /* SemVer */(tmp14, require);
            }
            tmp13 = tmp16;
          }
          if (!tmp13) {
            tmp14 = require;
          }
          num3 = num + 1;
          tmp9 = tmp14;
          tmp10 = tmp14;
          num = num3;
        } while (num3 < obj.set.length);
      }
      let tmp20 = null;
      if (tmp10) {
        tmp20 = null;
        if (obj.test(tmp10)) {
          tmp20 = tmp10;
        }
      }
      return tmp20;
    }
  }
  tmp = require;
};