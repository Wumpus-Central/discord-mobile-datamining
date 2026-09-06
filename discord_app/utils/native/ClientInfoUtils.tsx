// discord_app/utils/native/ClientInfoUtils.tsx
import _mod17 from "../../../_runtime/metro/00017__.js";
import PlatformUtils from "../PlatformUtils.tsx";
import NativeClientInfoModuleDefault from "../../../discord_common/js/packages/rtn-codegen/js/NativeClientInfoModule.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
