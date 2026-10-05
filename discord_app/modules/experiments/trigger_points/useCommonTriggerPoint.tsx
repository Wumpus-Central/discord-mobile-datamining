// === Module 13263: useCommonTriggerPoint ===

// Module 13263 (useCommonTriggerPoint)
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ExperimentStore from "ExperimentStore" /* 4776 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let tmp10;
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp9;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(8);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [ExperimentStore];
    const fn = function c() {
      const items = [authStore.getAllUserExperimentDescriptors(), authStore.getGuildExperiments()];
      return items;
    };
    cResult[0] = items;
    cResult[1] = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = tmp(504);
  [tmp8, tmp9] = tmpResult.useStateFromStoresArray(tmp4, tmp5);
  _slicedToArray(tmpResult.useStateFromStoresArray(tmp4, tmp5), 2);
  if (cResult[2] !== arg0) {
    const fn2 = function p() {
      closure_0.trigger();
    };
    cResult[2] = arg0;
    cResult[3] = fn2;
    tmp10 = fn2;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] === tmp9) {
    if (cResult[5] === arg0) {
      let tmp11;
      if (cResult[6] === tmp8) {
        tmp11 = cResult[7];
      }
      const effect = react.useEffect(tmp10, tmp11);
    }
  }
  const items1 = [arg0, tmp8, tmp9];
  cResult[4] = tmp9;
  cResult[5] = arg0;
  cResult[6] = tmp8;
  cResult[7] = items1;
  tmp11 = items1;
}) : ((arg0) => {
  let closure_0;
  const f114320 = () => {
    const items = [authStore.getAllUserExperimentDescriptors(), authStore.getGuildExperiments()];
    return items;
  };
  _require = arg0;
  let items = [ExperimentStore];
  const obj = require("get initialized");
  const items1 = [arg0, , ];
  [arr2[1], arr2[2]] = obj.useStateFromStoresArray(items, f114320);
  _slicedToArray(obj.useStateFromStoresArray(items, f114320), 2);
  const effect = react.useEffect(() => {
    closure_0.trigger();
  }, items1);
});
const result = size.fileFinishedImporting("modules/experiments/trigger_points/useCommonTriggerPoint.tsx");

export const useCommonTriggerPoint = tmp2;