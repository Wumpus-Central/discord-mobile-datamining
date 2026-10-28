// discord_app/modules/checkpoint/native/components/CheckpointCountUpStatNumber.tsx
import c from "../../../../../_runtime/00576_c.js";
import CheckpointStatNumber from "CheckpointStatNumber.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

const CheckpointStatNumberDefault = CheckpointStatNumber;

require = fn;
const noop = fn(19);
({ useEffect: closure_4, useMemo: hasOwnProperty, useState: metroRequire } = noop);
const View = fn(17).View;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useCountUpValue(arg0, arg1) {
      _require = arg0;
      closure_1 = arg1;
      const cResult = require("c").c(7);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AccessibilityStore];
        const fn = function v() {
          return useReducedMotion.useReducedMotion;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const obj = require("c");
      stateFromStores = require("initialize").useStateFromStores(tmp4, tmp5);
      const tmpResult = require("initialize");
      [tmp9, _slicedToArray] = closure_6(arg1);
      if (cResult[2] === arg0) {
        if (cResult[3] === stateFromStores) {
          if (cResult[4] === arg1) {
            let tmp10 = cResult[5];
            let tmp11 = cResult[6];
          }
          closure_4(tmp10, tmp11);
          if (stateFromStores) {
            tmp9 = arg0;
          }
          return tmp9;
        }
      }
      const fn2 = function p() {
        if (!stateFromStores) {
          const _Date = Date;
          closure_0 = Date.now();
          const _setInterval = setInterval;
          const interval = setInterval(() => {
            const bound = Math.min((Date.now() - closure_0) / 500, 1);
            if (1 === bound) {
              let rounded = closure_0;
            } else {
              const _Math = Math;
              rounded = Math.round((closure_0 - closure_1) * bound + closure_1);
            }
            _slicedToArray(rounded);
            if (1 === bound) {
              const _clearInterval = clearInterval;
              clearInterval(closure_1);
            }
          }, 32);
          return () => clearInterval(closure_1);
        }
      };
      const items1 = [arg0, stateFromStores, arg1];
      cResult[2] = arg0;
      cResult[3] = stateFromStores;
      cResult[4] = arg1;
      cResult[5] = fn2;
      cResult[6] = items1;
      tmp11 = items1;
      tmp10 = fn2;
      const tmp8 = _slicedToArray(closure_6(arg1), 2);
    }
  : function useCountUpValue(arg0, arg1) {
      _require = arg0;
      closure_1 = arg1;
      const items = [AccessibilityStore];
      stateFromStores = require("initialize").useStateFromStores(items, () => useReducedMotion.useReducedMotion);
      const obj = require("initialize");
      [tmp3, _slicedToArray] = closure_6(arg1);
      const items1 = [arg0, stateFromStores, arg1];
      closure_4(() => {
        if (!stateFromStores) {
          const _Date = Date;
          closure_0 = Date.now();
          const _setInterval = setInterval;
          const interval = setInterval(() => {
            const bound = Math.min((Date.now() - closure_0) / 500, 1);
            if (1 === bound) {
              let rounded = closure_0;
            } else {
              const _Math = Math;
              rounded = Math.round((closure_0 - closure_1) * bound + closure_1);
            }
            _slicedToArray(rounded);
            if (1 === bound) {
              const _clearInterval = clearInterval;
              clearInterval(closure_1);
            }
          }, 32);
          return () => clearInterval(closure_1);
        }
      }, items1);
      if (stateFromStores) {
        tmp3 = arg0;
      }
      return tmp3;
    };
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointCountUpStatNumber.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function CheckpointCountUpStatNumber(arg0) {
      const cResult = c.c(11);
      ({ start, end, size } = arg0);
      let num = 100;
      if (undefined !== size) {
        num = size;
      }
      let num2 = 0;
      if (undefined !== start) {
        num2 = start;
      }
      const tmp4Result = closure_10(end, num2);
      if (cResult[0] === end) {
        if (cResult[1] === num) {
          let tmp6 = cResult[2];
        }
        if (cResult[3] !== tmp6) {
          const obj2 = { width: tmp6 };
          cResult[3] = tmp6;
          cResult[4] = obj2;
          let tmp8 = obj2;
        } else {
          tmp8 = cResult[4];
        }
        if (cResult[5] === tmp4Result) {
          if (cResult[6] === num) {
            let tmp9 = cResult[7];
          }
          if (cResult[8] === tmp9) {
            if (cResult[9] === tmp8) {
              let tmp13 = cResult[10];
            }
            return tmp13;
          }
          const obj3 = { style: tmp8, children: tmp9 };
          const tmp16 = <View style={tmp8}>{tmp9}</View>;
          cResult[8] = tmp9;
          cResult[9] = tmp8;
          cResult[10] = tmp16;
          tmp13 = tmp16;
        }
        const obj4 = { value: tmp4Result, size: num };
        const tmp12 = jsx(CheckpointStatNumberDefault, { value: tmp4Result, size: num });
        cResult[5] = tmp4Result;
        cResult[6] = num;
        cResult[7] = tmp12;
        tmp9 = tmp12;
      }
      const checkpointStatNumberWidth = CheckpointStatNumber.getCheckpointStatNumberWidth(end, num);
      cResult[0] = end;
      cResult[1] = num;
      cResult[2] = checkpointStatNumberWidth;
      tmp6 = checkpointStatNumberWidth;
      const tmpResult = CheckpointStatNumber;
    }
  : function CheckpointCountUpStatNumber(start) {
      let num = start.start;
      if (num === undefined) {
        num = 0;
      }
      const end = start.end;
      let num2 = start.size;
      if (num2 === undefined) {
        num2 = 100;
      }
      const items = [end, num2];
      const tmp = closure_10(end, num);
      return (
        <View
          style={closure_5(() => {
            const obj = { width: CheckpointStatNumber.getCheckpointStatNumberWidth(end, num2) };
            return obj;
          }, items)}
        >
          {jsx(num2(13213), { value: closure_10(end, num), size: num2 })}
        </View>
      );
    };
