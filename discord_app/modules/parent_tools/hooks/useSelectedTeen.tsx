// === Module 7623: useSelectedTeen ===

// Module 7623 (useSelectedTeen)
import defaultAreStatesEqual from "defaultAreStatesEqual" /* 647 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import freshTeenActivityWithMap from "freshTeenActivityWithMap" /* 5296 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/parent_tools/hooks/useSelectedTeen.tsx");

export const useSelectedTeen = function useSelectedTeen() {
  const items = [closure_3];
  _require = _require(647).useStateFromStores(items, () => selectedTeenId.getSelectedTeenId());
  const obj = _require(647);
  const items1 = [closure_2];
  return _require(647).useStateFromStores(items1, () => {
    let user;
    if (null !== closure_0) {
      user = closure_1_2.getUser(tmp);
    }
    return user;
  });
};
export const useSelectedTeenId = function useSelectedTeenId() {
  const items = [closure_3];
  return defaultAreStatesEqual.useStateFromStores(items, () => selectedTeenId.getSelectedTeenId());
};