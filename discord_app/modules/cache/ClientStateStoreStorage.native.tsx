// discord_app/modules/cache/ClientStateStoreStorage.native.tsx
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import enforcingDefault from "enforcing" /* 502 */;

const NativeModules = get_ActivityIndicator.NativeModules;
const result = set.fileFinishedImporting("modules/cache/ClientStateStoreStorage.native.tsx");

export const setClientState = function setClientState(closure_17, arg1) {
  if (obj.isAndroid()) {
    let str;
    if (closure_17 != null) {
      str = closure_17.toString();
    }
    enforcingDefault.setClientState(str, undefined);
    const obj2 = enforcingDefault;
  } else {
    const DCDFastConnectManager = NativeModules.DCDFastConnectManager;
    let tmp4 = closure_17;
    if (closure_17 == null) {
      tmp4 = null;
    }
    DCDFastConnectManager.setClientState(tmp4, null);
  }
};