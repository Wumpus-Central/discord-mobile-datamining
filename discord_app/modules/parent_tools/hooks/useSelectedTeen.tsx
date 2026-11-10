// === Module 8446: useSelectedTeen ===

// Module 8446 (useSelectedTeen)
import useStateFromStores from "useStateFromStores" /* 563 */;
import UserStore from "UserStore" /* 1385 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7794 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useSelectedTeen.tsx");

export function useSelectedTeen() {
  items = [FamilyCenterStore];
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
}
export function useSelectedTeenId() {
  items = [FamilyCenterStore];
  return useStateFromStores.useStateFromStores(items, () => selectedTeenId.getSelectedTeenId());
}