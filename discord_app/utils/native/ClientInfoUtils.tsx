// === Module 1624: getConstants ===

// Module 1624 (getConstants)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import enforcingDefault from "enforcing" /* 669 */;
import set2 from "set" /* 1234 */;

const NativeModules = get_ActivityIndicator.NativeModules;
const result = set.fileFinishedImporting("utils/native/ClientInfoUtils.tsx");

export const getConstants = function getConstants() {
  if (obj.isAndroid()) {
    if (null === enforcingDefault) {
      const _Error = Error;
      error = new Error("Turbo module RTNClientInfoManager is undefined for Android");
      throw error;
    } else {
      return tmp3(669).getConstants();
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
  let str = "6336";
  if (items.includes("6336")) {
    const _HermesInternal = HermesInternal;
    str = "dev (" + "6336" + ")";
  }
  return str;
};