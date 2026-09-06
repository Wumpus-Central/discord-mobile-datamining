// === Module 8647: useSelectedTeen ===

// Module 8647 (useSelectedTeen)
import useStateFromStores from "useStateFromStores" /* 563 */;
import UserStore from "UserStore" /* 1371 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7537 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useSelectedTeen.tsx");

export const useSelectedTeen = function useSelectedTeen() {
  const items = [FamilyCenterStore];
  _require = require("useStateFromStores").useStateFromStores(items, () => selectedTeenId.getSelectedTeenId());
  const obj = require("useStateFromStores");
  const items1 = [UserStore];
  return require("useStateFromStores").useStateFromStores(items1, () => {
    let user;
    if (null !== closure_0) {
      user = UserStore.getUser(tmp);
    }
    return user;
  });
};
export const useSelectedTeenId = function useSelectedTeenId() {
  const items = [FamilyCenterStore];
  return useStateFromStores.useStateFromStores(items, () => selectedTeenId.getSelectedTeenId());
};