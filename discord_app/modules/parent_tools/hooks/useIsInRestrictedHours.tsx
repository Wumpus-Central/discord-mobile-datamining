// === Module 17749: useIsInRestrictedHours ===

// Module 17749 (useIsInRestrictedHours)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import UserStore from "UserStore" /* 1389 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7247 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useIsInRestrictedHours.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useIsInRestrictedHours() {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore, FamilyCenterStore];
    const fn = function n() {
      return currentUserInRestrictedHours.isCurrentUserInRestrictedHours();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return initialize.useStateFromStores(tmp4, tmp5);
}) : (function useIsInRestrictedHours() {
  const items = [UserStore, FamilyCenterStore];
  return initialize.useStateFromStores(items, () => currentUserInRestrictedHours.isCurrentUserInRestrictedHours());
});