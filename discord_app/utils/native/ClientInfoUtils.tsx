import { NativeModules } from "get ActivityIndicator";

const result = require("enforcing").fileFinishedImporting("utils/native/ClientInfoUtils.tsx");

export const getConstants = function getConstants() {
  if (obj.isAndroid()) {
    if (null === importDefault(672)) {
      const _Error = Error;
      const error = new Error("Turbo module RTNClientInfoManager is undefined for Android");
      throw error;
    } else {
      return tmp3(672).getConstants();
    }
    tmp3 = importDefault;
  } else {
    const InfoDictionaryManager = NativeModules.InfoDictionaryManager;
    return InfoDictionaryManager.getConstants();
  }
  obj = require(500) /* set */;
};
export const getBuildNumberLabel = function getBuildNumberLabel() {
  const items = ["0", "123456", "1234567890"];
  let str = "6151";
  if (items.includes("6151")) {
    const _HermesInternal = HermesInternal;
    str = "dev (" + "6151" + ")";
  }
  return str;
};