// === Module 12313: useUserProfileConnections ===

// Module 12313 (useUserProfileConnections)
import set from "set" /* 2 */;
import noop from "noop" /* 19 */;
import closure_4 from "createUserWidgetFromServer" /* 5365 */;

const useMemo = noop.useMemo;
let closure_5 = [];
const result = set.fileFinishedImporting("modules/user_profile/hooks/useUserProfileConnections.tsx");

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
      connectedAccounts = tmp.connectedAccounts;
    }
    if (null == connectedAccounts) {
      let found = closure_1_5;
    } else {
      const connectedAccounts1 = tmp.connectedAccounts;
      found = connectedAccounts1.filter((type) => {
        type = type.type;
        const value = closure_1_1(closure_1_2[4]).get(type);
        let isSupportedResult = null != value;
        if (isSupportedResult) {
          isSupportedResult = closure_1_1(closure_1_2[4]).isSupported(type);
          const tmpResult = closure_1_1(closure_1_2[4]);
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