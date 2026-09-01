// _runtime/metro/13541__.js
import Comparator from "../13532_Comparator.js";
import { SemVer } from "../13504_SemVer.js";
import { Range } from "../13533_Range.js";
import { Range } from "../13535_Range.js";

export default (arg0, arg1, arg2, arg3) => {
  let obj;
  let _require = arg3;
  const tmp3 = new SemVer(arg0, arg3);
  const tmp4 = new Range(arg1, arg3);
  if (">" === arg2) {
    dependencyMap = tmp(13524);
    let tmpResult = tmp(13529);
    tmpResult = tmp(13525);
    closure_2 = tmpResult;
    let str3 = ">=";
    let str = ">";
    let tmpResult1 = tmpResult;
  } else {
    str = "<";
    if ("<" === arg2) {
      dependencyMap = tmp(13525);
      tmpResult = tmp(13528);
      tmpResult1 = tmp(13524);
      closure_2 = tmpResult1;
      str3 = "<=";
    } else {
      const _TypeError = TypeError;
      const typeError = new TypeError('Must provide a hilo val of "<" or ">"');
      throw typeError;
    }
  }
  if (Range(tmp3, tmp4, arg3)) {
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
          if (semver.semver === Comparator.ANY) {
            tmp = new Comparator(">=0.0.0");
          }
          let tmp6 = _null;
          if (!_null) {
            tmp6 = tmp;
          }
          _null = tmp6;
          let tmp7 = _null2;
          if (!_null2) {
            tmp7 = tmp;
          }
          _null2 = tmp7;
          if (_null2(tmp.semver, _null.semver, c0)) {
            _null = tmp;
          } else if (callback(tmp.semver, _null2.semver, c0)) {
            _null2 = tmp;
          }
        });
        let tmp15 = _require;
        let tmp16 = num;
        if (_require.operator !== str) {
          let tmp22 = _require;
          if (_require.operator !== str3) {
            let tmp17 = dependencyMap;
            if (!dependencyMap.operator) {
              let tmp19 = dependencyMap;
              if (tmpResult(tmp3, dependencyMap.semver)) {
                obj = { v: false };
              }
            } else {
              let tmp18 = dependencyMap;
            }
            let tmp20 = dependencyMap;
            obj = undefined;
            if (dependencyMap.operator === str3) {
              let tmp21 = dependencyMap;
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
