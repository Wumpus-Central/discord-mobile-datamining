// discord_app/modules/user_profile/hooks/useUserProfileApplicationRoleConnections.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import noop from "../../../../_runtime/00019_noop.js";
import createUserWidgetFromServer from "../UserProfileStore.tsx";

const useMemo = noop.useMemo;
let closure_4 = [];
const result = obj132.fileFinishedImporting("modules/user_profile/hooks/useUserProfileApplicationRoleConnections.tsx");

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
      prop = stateFromStores.applicationRoleConnections;
    }
    return null == prop ? closure_1_4 : stateFromStores.applicationRoleConnections;
  }, items1);
};