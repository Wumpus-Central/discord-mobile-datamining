// discord_app/modules/content_inventory/memberlist/useTimestampTickedNow.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../_runtime/00576_c.js";
import DurationsDefault from "../../../utils/Durations.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/content_inventory/memberlist/useTimestampTickedNow.tsx");

export const useTimestampTickedNow = ReactCompilerGating.isReactCompilerEnabled()
  ? function useTimestampTickedNow(arg0) {
      const cResult = c.c(11);
      if (cResult[0] !== arg0) {
        let obj2 = arg0;
        if (undefined === arg0) {
          obj2 = {};
        }
        cResult[0] = arg0;
        cResult[1] = obj2;
        let tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      const isAppFocused = tmp4.isAppFocused;
      let tmp5 = undefined === isAppFocused;
      if (!tmp5) {
        tmp5 = isAppFocused;
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function u() {
          const timestamp = Date.now();
          const rounded = Math.floor(timestamp / result(1102).Millis.SECOND);
          return rounded * result(1102).Millis.SECOND;
        };
        cResult[2] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      [tmp8, require] = noop.useState(tmp6);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AccessibilityStore];
        const fn2 = function f() {
          return useReducedMotion.useReducedMotion;
        };
        cResult[3] = items;
        cResult[4] = fn2;
        let tmp10 = fn2;
        let tmp9 = items;
      } else {
        tmp9 = cResult[3];
        tmp10 = cResult[4];
      }
      const tmp7 = _slicedToArray(noop.useState(tmp6), 2);
      let stateFromStores = initialize.useStateFromStores(tmp9, tmp10);
      let tmp13 = !tmp5;
      if (tmp5) {
        if (stateFromStores) {
          stateFromStores = !tmp4.hovered;
        }
        tmp13 = stateFromStores;
      }
      const SECOND = DurationsDefault.Millis.SECOND;
      if (tmp13) {
        let result = 15 * SECOND;
      } else {
        result = SECOND;
      }
      importDefault = result;
      if (cResult[5] !== result) {
        const fn3 = function _() {
          const interval = new require("Timers").Interval();
          interval.start(closure_1, () => {
            const timestamp = Date.now();
            const rounded = Math.floor(timestamp / result(1102).Millis.SECOND);
            interval(rounded * result(1102).Millis.SECOND);
          });
          return () => interval.stop();
        };
        const items1 = [result];
        cResult[5] = result;
        cResult[6] = fn3;
        cResult[7] = items1;
        let tmp16 = items1;
        let tmp15 = fn3;
      } else {
        tmp15 = cResult[6];
        tmp16 = cResult[7];
      }
      const effect = noop.useEffect(tmp15, tmp16);
      if (cResult[8] === tmp8) {
        if (cResult[9] === tmp13) {
          let tmp18 = cResult[10];
        }
        return tmp18;
      }
      const obj4 = { now: tmp8, slowTickMode: tmp13 };
      cResult[8] = tmp8;
      cResult[9] = tmp13;
      cResult[10] = obj4;
      tmp18 = obj4;
      const tmpResult = initialize;
    }
  : function useTimestampTickedNow() {
      let obj = arg0;
      if (arg0 === undefined) {
        obj = {};
      }
      ({ isAppFocused, hovered } = obj);
      if (isAppFocused === undefined) {
        isAppFocused = true;
      }
      importDefault = undefined;
      const now = _slicedToArray(
        noop.useState(() => {
          const timestamp = Date.now();
          const rounded = Math.floor(timestamp / _undefined(1102).Millis.SECOND);
          return rounded * _undefined(1102).Millis.SECOND;
        }),
        2,
      );
      _require = now[1];
      const items = [AccessibilityStore];
      let stateFromStores = require("initialize").useStateFromStores(items, () => useReducedMotion.useReducedMotion);
      let slowTickMode = !isAppFocused;
      if (isAppFocused) {
        if (stateFromStores) {
          stateFromStores = !hovered;
        }
        slowTickMode = stateFromStores;
      }
      const SECOND = DurationsDefault.Millis.SECOND;
      if (slowTickMode) {
        let result = 15 * SECOND;
      } else {
        result = SECOND;
      }
      importDefault = result;
      const items1 = [result];
      const effect = noop.useEffect(() => {
        const interval = new closure_0(2058).Interval();
        interval.start(c1, () => {
          const timestamp = Date.now();
          const rounded = Math.floor(timestamp / c1(1102).Millis.SECOND);
          interval(rounded * c1(1102).Millis.SECOND);
        });
        return () => interval.stop();
      }, items1);
      return { now: now[0], slowTickMode };
    };
