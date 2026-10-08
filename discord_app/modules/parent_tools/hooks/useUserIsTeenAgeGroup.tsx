// === Module 14996: useUserIsTeenAgeGroup ===

// Module 14996 (useUserIsTeenAgeGroup)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7247 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useUserIsTeenAgeGroup.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useUserIsTeenAgeGroup() {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FamilyCenterStore];
    const fn = function s() {
      return ageGroup.getAgeGroup();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return "teen" === initialize.useStateFromStores(tmp4, tmp5);
}) : (function useUserIsTeenAgeGroup() {
  const items = [FamilyCenterStore];
  return "teen" === initialize.useStateFromStores(items, () => ageGroup.getAgeGroup());
});