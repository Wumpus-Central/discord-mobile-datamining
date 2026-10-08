// discord_app/modules/experiments/trigger_points/useCommonTriggerPoint.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ExperimentStore from "../ExperimentStore.tsx";

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/experiments/trigger_points/useCommonTriggerPoint.tsx");

export const useCommonTriggerPoint = ReactCompilerGating.isReactCompilerEnabled()
  ? function useCommonTriggerPoint(arg0) {
      _require = arg0;
      const cResult = require("c").c(8);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [ExperimentStore];
        const fn = function c() {
          const items = [authStore.getAllUserExperimentDescriptors(), authStore.getGuildExperiments()];
          return items;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const obj = require("c");
      const tmpResult = require("initialize");
      [tmp8, tmp9] = require("initialize").useStateFromStoresArray(tmp4, tmp5);
      if (cResult[2] !== arg0) {
        const fn2 = function p() {
          closure_0.trigger();
        };
        cResult[2] = arg0;
        cResult[3] = fn2;
        let tmp10 = fn2;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] === tmp9) {
        if (cResult[5] === arg0) {
          if (cResult[6] === tmp8) {
            let tmp11 = cResult[7];
          }
          const effect = noop.useEffect(tmp10, tmp11);
        }
      }
      const items1 = [arg0, tmp8, tmp9];
      cResult[4] = tmp9;
      cResult[5] = arg0;
      cResult[6] = tmp8;
      cResult[7] = items1;
      tmp11 = items1;
      const tmp7 = _slicedToArray(require("initialize").useStateFromStoresArray(tmp4, tmp5), 2);
    }
  : function useCommonTriggerPoint(arg0) {
      _require = arg0;
      let items = [ExperimentStore];
      const obj = require("initialize");
      const items1 = [arg0, ,];
      [arr2[1], arr2[2]] = require("initialize").useStateFromStoresArray(items, () => {
        const items = [authStore.getAllUserExperimentDescriptors(), authStore.getGuildExperiments()];
        return items;
      });
      const effect = noop.useEffect(() => {
        closure_0.trigger();
      }, items1);
    };
