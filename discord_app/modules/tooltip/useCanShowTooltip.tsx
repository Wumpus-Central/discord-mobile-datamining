// === Module 9629: useCanShowTooltip ===

// Module 9629 (useCanShowTooltip)
import TooltipActionCreatorsDefault from "TooltipActionCreators" /* 9631 */;
import noop from "module_19" /* 19 */;
import TooltipStore from "TooltipStore" /* 9630 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/tooltip/useCanShowTooltip.tsx");

export const useCanShowTooltip = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1, arg2) => {
  _require = arg0;
  const cResult = require("c").c(9);
  closure_1 = tmp4;
  dependencyMap = tmp5;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [TooltipStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === (undefined === arg2 || arg2)) {
    tmp(504);
    if (cResult[4] === tmp5) {
      if (cResult[5] === tmp4) {
        if (cResult[6] === arg0) {
          let tmp11 = cResult[7];
          let tmp12 = cResult[8];
        }
        const effect = noop.useEffect(tmp11, tmp12);
        return tmp10;
      }
    }
    const fn2 = function h() {
      if (closure_2) {
        TooltipActionCreatorsDefault.attemptToShowTooltip(closure_0, closure_1);
      }
    };
    const items1 = [tmp5, tmp4, arg0];
    cResult[4] = tmp5;
    cResult[5] = tmp4;
    cResult[6] = arg0;
    cResult[7] = fn2;
    cResult[8] = items1;
    tmp12 = items1;
    tmp11 = fn2;
  }
  const fn = function c() {
    return TooltipStore.canShowTooltip(closure_0) && closure_2;
  };
  cResult[1] = undefined === arg2 || arg2;
  cResult[2] = arg0;
  cResult[3] = fn;
  let obj = require("c");
  tmp = _require;
}) : ((arg0) => {
  _require = arg0;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let flag2 = arg2;
  if (arg2 === undefined) {
    flag2 = true;
  }
  const items = [TooltipStore];
  const items1 = [flag2, flag, arg0];
  const stateFromStores = require("initialize").useStateFromStores(items, () => TooltipStore.canShowTooltip(closure_0) && flag2);
  const effect = noop.useEffect(() => {
    if (flag2) {
      TooltipActionCreatorsDefault.attemptToShowTooltip(closure_0, flag);
    }
  }, items1);
  return stateFromStores;
});