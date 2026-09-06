// discord_app/hooks/useCountdown.tsx
import _mod19 from "../../_runtime/metro/00019__.js";
import DateUtils from "../utils/DateUtils.tsx";
import size from "../../_runtime/metro/00002__.js";

_mod19.useCallback;
const result = size.fileFinishedImporting("hooks/useCountdown.tsx");

export default function useCountdown(expiresAt, arg1) {
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
  const diffAsUnitsResult = require("DateUtils").diffAsUnits(Date.now(), expiresAt);
  const forceUpdate = require("areHookInputsEqual").useForceUpdate();
  const items = [expiresAt, flag, forceUpdate, arg2];
  const obj2 = require("areHookInputsEqual");
  let tmp5 = null;
  const tmp3 = forceUpdate(() => {
    const time = DateUtils.diffAsUnits(Date.now(), closure_0);
    if (!tmp) {
      forceUpdate();
      if (closure_1 != null) {
        closure_1();
      }
    }
    tmp = (0 === time.days && 0 === time.hours && 0 === time.minutes && 0 === time.seconds) || flag;
  }, items);
  if (!flag) {
    tmp5 = num;
  }
  require("useInterval")(tmp3, tmp5);
  return diffAsUnitsResult;
}
