// discord_app/hooks/useCountdown.tsx
import DateUtils from "../utils/DateUtils.tsx";
import _slicedToArray from "../../_runtime/metro/00032__.js";

const require = globalThis.__r;

require = fn;
const noop = fn(19);
({ useCallback: closure_4, useState: hasOwnProperty } = noop);
const size = fn(2);
const result = size.fileFinishedImporting("hooks/useCountdown.tsx");

export default function useCountdown(expiresAt, arg1, arg2, arg3) {
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
  _slicedToArray = undefined;
  const tmp = _slicedToArray(closure_5(Date.now), 2);
  _slicedToArray = tmp[1];
  const items = [expiresAt, flag, arg2];
  let obj = require("DateUtils");
  const diffAsUnitsResult = require("DateUtils").diffAsUnits(tmp[0], expiresAt);
  let tmp5 = null;
  const tmp3 = closure_4(() => {
    const time = DateUtils.diffAsUnits(Date.now(), closure_0);
    let tmp2 = 0 === time.days && 0 === time.hours && 0 === time.minutes && 0 === time.seconds;
    if (tmp2) {
      const _Number = Number;
      closure_3(Number(closure_0));
    }
    if (!tmp2) {
      tmp2 = flag;
    }
    if (!tmp2) {
      const _Date = Date;
      closure_3(Date.now());
      if (closure_1 != null) {
        closure_1();
      }
    }
  }, items);
  if (!flag) {
    tmp5 = num;
  }
  require("useInterval")(tmp3, tmp5);
  return diffAsUnitsResult;
}
