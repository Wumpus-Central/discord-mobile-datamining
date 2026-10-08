// === Module 16633: useICYMITabBadge ===

// Module 16633 (useICYMITabBadge)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import ICYMIStore from "ICYMIStore" /* 8429 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/useICYMITabBadge.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useICYMITabBadge() {
  const cResult = c.c(5);
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
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5, tmp6);
  if (cResult[3] !== stateFromStores) {
    const obj2 = { value: 0, showDot: stateFromStores };
    cResult[3] = stateFromStores;
    cResult[4] = obj2;
    let tmp9 = obj2;
  } else {
    tmp9 = cResult[4];
  }
  return tmp9;
}) : (function useICYMITabBadge() {
  const obj = { value: 0, showDot: null };
  const items = [ICYMIStore];
  obj.showDot = initialize.useStateFromStores(items, () => ICYMIStore.hasNewContent(), []);
  return obj;
});
export const icymiTabBadgeShown = function icymiTabBadgeShown() {
  return ICYMIStore.hasNewContent();
};