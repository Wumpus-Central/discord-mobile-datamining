// discord_app/hooks/useCountdown.tsx
import _mod19 from "../../_runtime/metro/00019__.js";
import DateUtils from "../utils/DateUtils.tsx";
import useIntervalDefault from "useInterval.tsx";
import ReactCompilerGating from "../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../_runtime/metro/00002__.js";

const require = globalThis.__r;

_mod19.useCallback;
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
      if (cResult[0] !== expiresAt) {
        const _Date = Date;
        const diffAsUnitsResult = tmp(4752).diffAsUnits(Date.now(), expiresAt);
        cResult[0] = expiresAt;
        cResult[1] = diffAsUnitsResult;
        let tmp5 = diffAsUnitsResult;
        const tmpResult = tmp(4752);
      } else {
        tmp5 = cResult[1];
      }
      let obj = require("c");
      const forceUpdate = require("areHookInputsEqual").useForceUpdate();
      if (cResult[2] === expiresAt) {
        if (cResult[3] === tmp4) {
          if (cResult[4] === forceUpdate) {
            if (cResult[5] === arg2) {
              let tmp9 = cResult[6];
            }
            let tmp12 = null;
            if (!tmp4) {
              tmp12 = num;
            }
            useIntervalDefault(tmp9, tmp12);
            return tmp5;
          }
        }
      }
      const fn = function v() {
        const time = DateUtils.diffAsUnits(Date.now(), closure_0);
        if (!tmp) {
          forceUpdate();
          if (closure_1 != null) {
            closure_1();
          }
        }
        tmp = (0 === time.days && 0 === time.hours && 0 === time.minutes && 0 === time.seconds) || closure_2;
      };
      cResult[2] = expiresAt;
      cResult[3] = undefined !== arg3 && arg3;
      cResult[4] = forceUpdate;
      cResult[5] = arg2;
      cResult[6] = fn;
      tmp9 = fn;
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
    };
