// discord_app/modules/user_profile/hooks/useUserProfileConnections.tsx
import _mod19 from "../../../../_runtime/metro/00019__.js";
import UserProfileStore from "../UserProfileStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const useMemo = _mod19.useMemo;
let closure_5 = [];
const result = size.fileFinishedImporting("modules/user_profile/hooks/useUserProfileConnections.tsx");

export default function useUserProfileConnections(arg0) {
  _require = arg0;
  const platformAllowed = require("ConnectionsHooks").usePlatformAllowed({ forUserProfile: true });
  const obj = require("ConnectionsHooks");
  const items = [UserProfileStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => UserProfileStore.getUserProfile(closure_0));
  let connectedAccounts;
  if (stateFromStores != null) {
    connectedAccounts = stateFromStores.connectedAccounts;
  }
  const items1 = [connectedAccounts, platformAllowed];
  return useMemo(() => {
    let connectedAccounts;
    if (stateFromStores != null) {
      connectedAccounts = stateFromStores.connectedAccounts;
    }
    if (null == connectedAccounts) {
      let found = closure_5;
    } else {
      const connectedAccounts1 = stateFromStores.connectedAccounts;
      found = connectedAccounts1.filter((type) => {
        type = type.type;
        value = platformAllowed(stateFromStores[4]).get(type);
        let isSupportedResult = null != value;
        if (isSupportedResult) {
          isSupportedResult = platformAllowed(stateFromStores[4]).isSupported(type);
          const tmpResult = platformAllowed(stateFromStores[4]);
        }
        if (isSupportedResult) {
          isSupportedResult = closure_1_1(value);
        }
        return isSupportedResult;
      });
    }
    return found;
  }, items1);
}
