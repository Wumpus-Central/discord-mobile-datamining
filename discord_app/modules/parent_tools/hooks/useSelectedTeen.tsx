// === Module 7482: useSelectedTeen ===

// Module 7482 (useSelectedTeen)
import defaultAreStatesEqual from "defaultAreStatesEqual" /* 647 */;
import closure_2 from "mergeGuildAvatar" /* 1922 */;
import closure_3 from "freshTeenActivityWithMap" /* 7143 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useSelectedTeen.tsx");

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