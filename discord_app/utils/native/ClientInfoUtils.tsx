import { enforcing } from "../../../discord_common/js/packages/rtn-codegen/js/NativeClientInfoModule.tsx";
import { set } from "../PlatformUtils.tsx";
// discord_app/utils/native/ClientInfoUtils.tsx
import { NativeModules } from "get ActivityIndicator";

const result = require("enforcing").fileFinishedImporting("utils/native/ClientInfoUtils.tsx");

export const getConstants = function getConstants() {
  if (obj.isAndroid()) {
    if (null === enforcing) {
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
  obj = set /* set */;
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