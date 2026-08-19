// === Module 1626: getConstants ===

// Module 1626 (getConstants)
import obj132 from "obj132" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import obj1322 from "obj132" /* 500 */;
import enforcingDefault from "enforcing" /* 672 */;

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