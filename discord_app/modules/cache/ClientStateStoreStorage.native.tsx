// discord_app/modules/cache/ClientStateStoreStorage.native.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import get_ActivityIndicator from "../../../_runtime/00017_get_ActivityIndicator.js";
import obj1322 from "../../utils/PlatformUtils.tsx";
import enforcingDefault from "../../../discord_common/js/packages/rtn-codegen/js/NativeFastConnectModule.tsx";

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