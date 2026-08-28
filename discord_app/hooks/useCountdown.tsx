// === Module 7131: useCountdown ===

// Module 7131 (useCountdown)
import set from "set" /* 2 */;
import noop from "noop" /* 19 */;

noop.useCallback;
const result = set.fileFinishedImporting("hooks/useCountdown.tsx");

export default function useCountdown(closure_0) {
  const _require = closure_0;
  let num = arg1;
  if (arg1 === undefined) {
    num = 1000;
  }
  importDefault = arg2;
  let flag = arg3;
  if (arg3 === undefined) {
    flag = false;
  }
  let forceUpdate;
  const obj = _require(flag[1]);
  let diffAsUnitsResult = _require(flag[1]).diffAsUnits(Date.now(), closure_0);
  forceUpdate = _require(flag[2]).useForceUpdate();
  const items = [closure_0, flag, forceUpdate, arg2];
  const obj2 = _require(flag[2]);
  let tmp5 = null;
  const tmp3 = forceUpdate(() => {
    const diffAsUnitsResult = callback(flag[1]).diffAsUnits(Date.now(), callback);
    if (!tmp2) {
      forceUpdate();
      if (callback2 != null) {
        callback2();
      }
    }
  }, items);
  if (!flag) {
    tmp5 = num;
  }
  importDefault(flag[3])(tmp3, tmp5);
  return diffAsUnitsResult;
};