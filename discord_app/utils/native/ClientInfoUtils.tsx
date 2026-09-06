// === Module 1364: ClientInfoUtils ===

// Module 1364 (ClientInfoUtils)
import _mod17 from "module_17" /* 17 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import NativeClientInfoModuleDefault from "NativeClientInfoModule" /* 1344 */;
import size from "module_2" /* 2 */;

const NativeModules = _mod17.NativeModules;
const result = size.fileFinishedImporting("utils/native/ClientInfoUtils.tsx");

export const getConstants = function getConstants() {
  if (obj.isAndroid()) {
    if (null === NativeClientInfoModuleDefault) {
      const _Error = Error;
      const error = new Error("Turbo module RTNClientInfoManager is undefined for Android");
      throw error;
    } else {
      return NativeClientInfoModuleDefault.getConstants();
    }
  } else {
    const InfoDictionaryManager = NativeModules.InfoDictionaryManager;
    return InfoDictionaryManager.getConstants();
  }
  obj = PlatformUtils;
};
export const getBuildNumberLabel = function getBuildNumberLabel() {
  const items = ["0", "123456", "1234567890"];
  let str = "6365";
  if (items.includes("6365")) {
    const _HermesInternal = HermesInternal;
    str = "dev (" + "6365" + ")";
  }
  return str;
};