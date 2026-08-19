// === Module 13557: setClientState ===

// Module 13557 (setClientState)
import obj132 from "obj132" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import obj1322 from "obj132" /* 500 */;
import enforcingDefault from "enforcing" /* 502 */;

const NativeModules = get_ActivityIndicator.NativeModules;
const result = obj132.fileFinishedImporting("modules/cache/ClientStateStoreStorage.native.tsx");

export const setClientState = function setClientState(closure_17, arg1) {
  if (obj.isAndroid()) {
    let str;
    if (closure_17 != null) {
      str = closure_17.toString();
    }
    enforcingDefault.setClientState(str, undefined);
  } else {
    const DCDFastConnectManager = NativeModules.DCDFastConnectManager;
    let tmp4 = closure_17;
    if (closure_17 == null) {
      tmp4 = null;
    }
    DCDFastConnectManager.setClientState(tmp4, null);
  }
  obj = obj1322;
};