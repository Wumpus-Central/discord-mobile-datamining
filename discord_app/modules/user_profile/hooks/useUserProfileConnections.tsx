// discord_app/modules/user_profile/hooks/useUserProfileConnections.tsx
import react from "../../../../_runtime/00019_react.js";
import UserProfileStore from "../UserProfileStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, type;

const useMemo = react.useMemo;
let closure_5 = [];
const result = size.fileFinishedImporting("modules/user_profile/hooks/useUserProfileConnections.tsx");

export default function useUserProfileConnections(arg0) {
  let closure_0;
  let stateFromStores;
  _require = arg0;
  let obj = require("ConnectionsHooks");
  const platformAllowed = obj.usePlatformAllowed({ forUserProfile: true });
  const items = [UserProfileStore];
  const obj2 = require("get initialized");
  stateFromStores = obj2.useStateFromStores(items, () => UserProfileStore.getUserProfile(closure_0));
  let connectedAccounts;
  if (stateFromStores != null) {
    connectedAccounts = stateFromStores.connectedAccounts;
  }
  const items1 = [connectedAccounts, platformAllowed];
  return useMemo(() => {
    let found;
    let connectedAccounts;
    if (stateFromStores != null) {
      connectedAccounts = stateFromStores.connectedAccounts;
    }
    if (null == connectedAccounts) {
      found = closure_5;
    } else {
      const connectedAccounts1 = stateFromStores.connectedAccounts;
      found = connectedAccounts1.filter((type) => {
        type = type.type;
        const obj = platformAllowed(stateFromStores[4]);
        const value = obj.get(type);
        let isSupportedResult = null != value;
        if (isSupportedResult) {
          const tmpResult = platformAllowed(stateFromStores[4]);
          isSupportedResult = tmpResult.isSupported(type);
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
