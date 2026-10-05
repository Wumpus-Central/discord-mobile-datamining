// === Module 16333: useICYMITabBadge ===

// Module 16333 (useICYMITabBadge)
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import ICYMIStore from "ICYMIStore" /* 8011 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp9;
  const obj = react;
  const cResult = obj.c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ICYMIStore];
    const fn = function o() {
      return ICYMIStore.hasNewContent();
    };
    const items1 = [];
    cResult[0] = items;
    cResult[1] = fn;
    cResult[2] = items1;
    tmp4 = items;
    tmp5 = fn;
    tmp6 = items1;
  } else {
    [tmp4, tmp5, tmp6] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5, tmp6);
  if (cResult[3] !== stateFromStores) {
    const obj2 = { value: 0, showDot: stateFromStores };
    cResult[3] = stateFromStores;
    cResult[4] = obj2;
    tmp9 = obj2;
  } else {
    tmp9 = cResult[4];
  }
  return tmp9;
}) : (() => {
  let items;
  let obj2;
  const obj = { value: 0, showDot: obj2.useStateFromStores(items, () => ICYMIStore.hasNewContent(), []) };
  items = [ICYMIStore];
  obj2 = get_initialized;
  return obj;
});
const result = size.fileFinishedImporting("modules/icymi/useICYMITabBadge.tsx");

export default tmp2;
export const icymiTabBadgeShown = function icymiTabBadgeShown() {
  return ICYMIStore.hasNewContent();
};