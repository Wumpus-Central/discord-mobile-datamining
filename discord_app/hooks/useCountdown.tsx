// discord_app/hooks/useCountdown.tsx
import DateUtils from "../utils/DateUtils.tsx";
import useIntervalDefault from "useInterval.tsx";
import _slicedToArray from "../../_runtime/metro/00032__.js";

const require = globalThis.__r;

require = fn;
const noop = fn(19);
({ useCallback: closure_4, useState: hasOwnProperty } = noop);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("hooks/useCountdown.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useCountdown(expiresAt, arg1, arg2, arg3) {
      _require = expiresAt;
      importDefault = arg2;
      const cResult = require("c").c(7);
      let num = 1000;
      if (undefined !== arg1) {
        num = arg1;
      }
      dependencyMap = tmp4;
      let obj = require("c");
      const tmp = _require;
      [tmp6, _slicedToArray] = closure_5(Date.now);
      if (cResult[0] === expiresAt) {
        if (cResult[1] === tmp6) {
          let tmp7 = cResult[2];
        }
        if (cResult[3] === expiresAt) {
          if (cResult[4] === tmp4) {
            if (cResult[5] === arg2) {
              let tmp9 = cResult[6];
            }
            class A {
              constructor() {
                obj = closure_0(closure_2[4]);
                tmp = closure_0;
                time = obj.diffAsUnits(Date.now(), closure_0);
                tmp2 = 0 === time.days && 0 === time.hours && 0 === time.minutes && 0 === time.seconds;
                if (tmp2) {
                  tmp3 = closure_3;
                  _Number = Number;
                  tmp4 = closure_3(Number(tmp));
                }
                if (!tmp2) {
                  tmp2 = closure_2;
                }
                if (!tmp2) {
                  tmp5 = closure_3;
                  _Date = Date;
                  tmp6 = closure_3(Date.now());
                  tmp7 = null;
                  if (closure_1 != null) {
                    tmp8 = closure_1();
                  }
                }
                return;
              }
            }
            if (!tmp4) {
              const tmp12 = num;
            }
            useIntervalDefault(tmp9, tmp12);
            return tmp7;
          }
        }
        class A {
          constructor() {
            obj = closure_0(closure_2[4]);
            tmp = closure_0;
            time = obj.diffAsUnits(Date.now(), closure_0);
            tmp2 = 0 === time.days && 0 === time.hours && 0 === time.minutes && 0 === time.seconds;
            if (tmp2) {
              tmp3 = closure_3;
              _Number = Number;
              tmp4 = closure_3(Number(tmp));
            }
            if (!tmp2) {
              tmp2 = closure_2;
            }
            if (!tmp2) {
              tmp5 = closure_3;
              _Date = Date;
              tmp6 = closure_3(Date.now());
              tmp7 = null;
              if (closure_1 != null) {
                tmp8 = closure_1();
              }
            }
            return;
          }
        }
        cResult[3] = expiresAt;
        cResult[4] = tmp4;
        cResult[5] = arg2;
        cResult[6] = A;
        tmp9 = A;
      }
      const tmp5 = _slicedToArray(closure_5(Date.now), 2);
      const diffAsUnitsResult = tmp(4797).diffAsUnits(tmp6, expiresAt);
      cResult[0] = expiresAt;
      cResult[1] = tmp6;
      cResult[2] = diffAsUnitsResult;
      tmp7 = diffAsUnitsResult;
    }
  : function useCountdown(expiresAt) {
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
    };
