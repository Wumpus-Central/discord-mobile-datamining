// discord_app/modules/user_profile/hooks/useUserProfileApplicationRoleConnections.tsx
import _mod19 from "../../../../_runtime/metro/00019__.js";
import UserProfileStore from "../UserProfileStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
      prop = tmp.applicationRoleConnections;
    }
    return null == prop ? closure_4 : stateFromStores.applicationRoleConnections;
  }, items1);
}
