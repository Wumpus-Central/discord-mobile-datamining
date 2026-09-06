// === Module 13083: useUserProfileApplicationRoleConnections ===

// Module 13083 (useUserProfileApplicationRoleConnections)
import _mod19 from "module_19" /* 19 */;
import UserProfileStore from "UserProfileStore" /* 7621 */;
import size from "module_2" /* 2 */;

const useMemo = _mod19.useMemo;
let closure_4 = [];
const result = size.fileFinishedImporting("modules/user_profile/hooks/useUserProfileApplicationRoleConnections.tsx");

export default function useUserProfileApplicationRoleConnections(arg0) {
  _require = arg0;
  const items = [UserProfileStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => UserProfileStore.getUserProfile(closure_0));
  let prop;
  if (stateFromStores != null) {
    prop = stateFromStores.applicationRoleConnections;
  }
  const items1 = [prop];
  return useMemo(() => {
    let prop;
    if (stateFromStores != null) {
      prop = stateFromStores.applicationRoleConnections;
    }
    return null == prop ? closure_4 : stateFromStores.applicationRoleConnections;
  }, items1);
};