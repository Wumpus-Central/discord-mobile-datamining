// discord_app/utils/native/ClientInfoUtils.tsx
import set from "../../../_runtime/00002_set.js";
import get_ActivityIndicator from "../../../_runtime/00017_get_ActivityIndicator.js";
import set2 from "../PlatformUtils.tsx";
import enforcingDefault from "../../../discord_common/js/packages/rtn-codegen/js/NativeClientInfoModule.tsx";

const NativeModules = get_ActivityIndicator.NativeModules;
const result = set.fileFinishedImporting("utils/native/ClientInfoUtils.tsx");

export const getConstants = function getConstants() {
  if (obj.isAndroid()) {
    if (null === enforcingDefault) {
      const _Error = Error;
      error = new Error("Turbo module RTNClientInfoManager is undefined for Android");
      throw error;
    } else {
      return tmp3(672).getConstants();
    }
    tmp3 = importDefault;
  } else {
    const InfoDictionaryManager = NativeModules.InfoDictionaryManager;
    return InfoDictionaryManager.getConstants();
  }
  obj = set2;
};
export const getBuildNumberLabel = function getBuildNumberLabel() {
  const items = ["0", "123456", "1234567890"];
  let str = "6283";
  if (items.includes("6283")) {
    const _HermesInternal = HermesInternal;
    str = "dev (" + "6283" + ")";
  }
  return str;
};