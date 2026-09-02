// === Module 8789: useSelectedTeen ===

// Module 8789 (useSelectedTeen)
import defaultAreStatesEqual from "defaultAreStatesEqual" /* 644 */;
import closure_2 from "mergeGuildAvatar" /* 1921 */;
import closure_3 from "freshTeenActivityWithMap" /* 7291 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useSelectedTeen.tsx");

export const useSelectedTeen = function useSelectedTeen() {
  const items = [closure_3];
  _require = _require(644).useStateFromStores(items, () => selectedTeenId.getSelectedTeenId());
  const obj = _require(644);
  const items1 = [closure_2];
  return _require(644).useStateFromStores(items1, () => {
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