// === Module 6948: useCountdown ===

// Module 6948 (useCountdown)
import react from "react" /* 19 */;
import DateUtils from "DateUtils" /* 4552 */;
import useIntervalDefault from "useInterval" /* 6954 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault;

react.useCallback;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((expiresAt, arg1, arg2, arg3) => {
  let closure_1;
  let closure_2;
  let tmp5;
  _require = expiresAt;
  importDefault = arg2;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(7);
  let num = 1000;
  if (undefined !== arg1) {
    num = arg1;
  }
  dependencyMap = tmp4;
  if (cResult[0] !== expiresAt) {
    const _Date = Date;
    const tmpResult = tmp(4552);
    const diffAsUnitsResult = tmpResult.diffAsUnits(Date.now(), expiresAt);
    cResult[0] = expiresAt;
    cResult[1] = diffAsUnitsResult;
    tmp5 = diffAsUnitsResult;
  } else {
    tmp5 = cResult[1];
  }
  const tmpResult2 = tmp(6949);
  const forceUpdate = tmpResult2.useForceUpdate();
  if (cResult[2] === expiresAt) {
    if (cResult[3] === (undefined !== arg3 && arg3)) {
      if (cResult[4] === forceUpdate) {
        let tmp9;
        if (cResult[5] === arg2) {
          tmp9 = cResult[6];
        }
        let tmp12 = null;
        const tmp11 = useIntervalDefault;
        if (!(undefined !== arg3 && arg3)) {
          tmp12 = num;
        }
        tmp11(tmp9, tmp12);
        return tmp5;
      }
    }
  }
  const fn = function v() {
    const obj = DateUtils;
    const time = obj.diffAsUnits(Date.now(), expiresAt);
    const tmp = 0 === time.days && 0 === time.hours && 0 === time.minutes && 0 === time.seconds || closure_2;
    if (!tmp) {
      forceUpdate();
      if (closure_1 != null) {
        closure_1();
      }
    }
  };
  cResult[2] = expiresAt;
  cResult[3] = undefined !== arg3 && arg3;
  cResult[4] = forceUpdate;
  cResult[5] = arg2;
  cResult[6] = fn;
  tmp9 = fn;
}) : ((expiresAt) => {
  let closure_1;
  _require = expiresAt;
  let num = arg1;
  if (arg1 === undefined) {
    num = 1000;
  }
  importDefault = arg2;
  let flag = arg3;
  if (arg3 === undefined) {
    flag = false;
  }
  let obj = require("DateUtils");
  const diffAsUnitsResult = obj.diffAsUnits(Date.now(), expiresAt);
  const obj2 = require("module_6949");
  const forceUpdate = obj2.useForceUpdate();
  const items = [expiresAt, flag, forceUpdate, arg2];
  let tmp5 = null;
  const tmp3 = forceUpdate(() => {
    const obj = DateUtils;
    const time = obj.diffAsUnits(Date.now(), expiresAt);
    const tmp = 0 === time.days && 0 === time.hours && 0 === time.minutes && 0 === time.seconds || flag;
    if (!tmp) {
      forceUpdate();
      if (closure_1 != null) {
        closure_1();
      }
    }
  }, items);
  const tmp4 = require("useInterval");
  if (!flag) {
    tmp5 = num;
  }
  tmp4(tmp3, tmp5);
  return diffAsUnitsResult;
});
const result = size.fileFinishedImporting("hooks/useCountdown.tsx");

export default tmp2;