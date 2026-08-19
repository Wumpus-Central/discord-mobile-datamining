// discord_app/utils/native/ClientInfoUtils.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import get_ActivityIndicator from "../../../_runtime/00017_get_ActivityIndicator.js";
import obj1322 from "../PlatformUtils.tsx";
import enforcingDefault from "../../../discord_common/js/packages/rtn-codegen/js/NativeClientInfoModule.tsx";

const NativeModules = get_ActivityIndicator.NativeModules;
const result = obj132.fileFinishedImporting("utils/native/ClientInfoUtils.tsx");

export const getConstants = function getConstants() {
  if (obj.isAndroid()) {
    if (null === enforcingDefault) {
      const _Error = Error;
      error = new Error("Turbo module RTNClientInfoManager is undefined for Android");
      throw error;
    } else {
      return enforcingDefault.getConstants();
    }
  } else {
    const InfoDictionaryManager = NativeModules.InfoDictionaryManager;
    return InfoDictionaryManager.getConstants();
  }
  obj = obj1322;
};
export const getBuildNumberLabel = function getBuildNumberLabel() {
  const items = ["0", "123456", "1234567890"];
  let str = "6244";
  if (items.includes("6244")) {
    const _HermesInternal = HermesInternal;
    str = "dev (" + "6244" + ")";
  }
  return str;
};