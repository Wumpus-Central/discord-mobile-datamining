// === Module 7721: useIsInAdultAgeGroup ===

// Module 7721 (useIsInAdultAgeGroup)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7252 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useIsInAdultAgeGroup.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useIsInAdultAgeGroup() {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FamilyCenterStore];
    const fn = function o() {
      return ageGroup.getAgeGroup();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return "adult" === initialize.useStateFromStores(tmp4, tmp5);
}) : (function useIsInAdultAgeGroup() {
  const items = [FamilyCenterStore];
  return "adult" === initialize.useStateFromStores(items, () => ageGroup.getAgeGroup());
});