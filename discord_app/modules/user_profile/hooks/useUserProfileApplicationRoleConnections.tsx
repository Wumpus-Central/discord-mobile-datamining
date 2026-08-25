// === Module 12684: useUserProfileApplicationRoleConnections ===

// Module 12684 (useUserProfileApplicationRoleConnections)
import set from "set" /* 2 */;
import noop from "noop" /* 19 */;
import closure_3 from "createUserWidgetFromServer" /* 7227 */;

const useMemo = noop.useMemo;
let closure_4 = [];
const result = set.fileFinishedImporting("modules/user_profile/hooks/useUserProfileApplicationRoleConnections.tsx");

export default function useUserProfileApplicationRoleConnections(arg0) {
  const _require = arg0;
  const items = [closure_3];
  stateFromStores = _require(stateFromStores[2]).useStateFromStores(items, () => closure_1_3.getUserProfile(closure_0));
  let prop;
  if (stateFromStores != null) {
    prop = stateFromStores.applicationRoleConnections;
  }
  const items1 = [prop];
  return useMemo(() => {
    let prop;
    if (stateFromStores != null) {
      prop = tmp.applicationRoleConnections;
    }
    return null == prop ? closure_1_4 : stateFromStores.applicationRoleConnections;
  }, items1);
};