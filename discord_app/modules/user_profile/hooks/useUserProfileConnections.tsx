// === Module 12202: useUserProfileConnections ===

// Module 12202 (useUserProfileConnections)
import { useMemo } from "noop";
import createUserWidgetFromServer from "createUserWidgetFromServer";

let closure_5 = [];
const result = require("PlatformTypes").fileFinishedImporting("modules/user_profile/hooks/useUserProfileConnections.tsx");

export default function useUserProfileConnections(arg0) {
  const _require = arg0;
  const platformAllowed = _require(stateFromStores[2]).usePlatformAllowed({ forUserProfile: true });
  const obj = _require(stateFromStores[2]);
  const items = [createUserWidgetFromServer];
  stateFromStores = _require(stateFromStores[3]).useStateFromStores(items, () => outer1_4.getUserProfile(closure_0));
  let connectedAccounts;
  if (stateFromStores != null) {
    connectedAccounts = stateFromStores.connectedAccounts;
  }
  const items1 = [connectedAccounts, platformAllowed];
  return useMemo(() => {
    let connectedAccounts;
    if (stateFromStores != null) {
      connectedAccounts = tmp.connectedAccounts;
    }
    if (null == connectedAccounts) {
      let found = outer1_5;
    } else {
      const connectedAccounts1 = tmp.connectedAccounts;
      found = connectedAccounts1.filter((type) => {
        type = type.type;
        const value = outer1_1(outer1_2[4]).get(type);
        let isSupportedResult = null != value;
        if (isSupportedResult) {
          isSupportedResult = outer1_1(outer1_2[4]).isSupported(type);
          const tmpResult = outer1_1(outer1_2[4]);
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