// discord_app/modules/user_profile/hooks/useUserProfileConnections.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import noop from "../../../../_runtime/00019_noop.js";
import createUserWidgetFromServer from "../UserProfileStore.tsx";

const useMemo = noop.useMemo;
let closure_5 = [];
const result = obj132.fileFinishedImporting("modules/user_profile/hooks/useUserProfileConnections.tsx");

export default function useUserProfileConnections(arg0) {
  const _require = arg0;
  const platformAllowed = _require(stateFromStores[2]).usePlatformAllowed({ forUserProfile: true });
  const obj = _require(stateFromStores[2]);
  const items = [closure_4];
  stateFromStores = _require(stateFromStores[3]).useStateFromStores(items, () => closure_1_4.getUserProfile(closure_0));
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
      let found = closure_1_5;
    } else {
      const connectedAccounts1 = stateFromStores.connectedAccounts;
      found = connectedAccounts1.filter((item, index) => {
        const type = item.type;
        const value = platformAllowed(stateFromStores[4]).get(type);
        let isSupportedResult = null != value;
        if (isSupportedResult) {
          isSupportedResult = platformAllowed(stateFromStores[4]).isSupported(type);
          const tmpResult = platformAllowed(stateFromStores[4]);
        }
        if (isSupportedResult) {
          isSupportedResult = callback(value);
        }
        return isSupportedResult;
      });
    }
    return found;
  }, items1);
};