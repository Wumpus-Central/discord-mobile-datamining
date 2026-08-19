// discord_app/hooks/useCountdown.tsx
import obj132 from "../../_runtime/00002_obj132.js";
import noop from "../../_runtime/00019_noop.js";

noop.useCallback;
const result = obj132.fileFinishedImporting("hooks/useCountdown.tsx");

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
  let obj = _require(flag[1]);
  const diffAsUnitsResult = _require(flag[1]).diffAsUnits(Date.now(), closure_0);
  const forceUpdate = _require(flag[2]).useForceUpdate();
  const items = [closure_0, flag, forceUpdate, arg2];
  const obj2 = _require(flag[2]);
  let tmp5 = null;
  const tmp3 = forceUpdate(() => {
    const time = callback(flag[1]).diffAsUnits(Date.now(), callback);
    if (!tmp) {
      forceUpdate();
      if (callback2 != null) {
        callback2();
      }
    }
    const obj = callback(flag[1]);
    tmp = 0 === time.days && 0 === time.hours && 0 === time.minutes && 0 === time.seconds || flag;
  }, items);
  if (!flag) {
    tmp5 = num;
  }
  importDefault(flag[3])(tmp3, tmp5);
  return diffAsUnitsResult;
};