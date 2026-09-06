// discord_app/modules/discord_md5/native/DiscordMd5Native.tsx
import _mod17 from "../../../../_runtime/metro/00017__.js";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import NativeFileModuleDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeFileModule.tsx";
import DiscordMd5 from "../DiscordMd5.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const NativeModules = _mod17.NativeModules;
const prototype = function DiscordMd5Native() {
  return HermesBuiltin.applyArguments(new.target, new.target);
}.prototype;
class prototype extends tmp2 {}
prototype["fromFileUri"] = function fromFileUri(uri) {
  let num = arg1;
  if (arg1 === undefined) {
    num = 4096;
  }
  if (obj.isAndroid()) {
    if (null == NativeFileModuleDefault) {
      const _Error = Error;
      const error = new Error("RTNFileManager doesn't exist?");
      let rejectResult = Promise.reject(error);
    } else {
      rejectResult = NativeFileModuleDefault.getFileHash(uri, "md5", num);
      const tmp3Result = NativeFileModuleDefault;
    }
  } else {
    const DCDFileManager = NativeModules.DCDFileManager;
    return DCDFileManager.getFileHash(uri, "md5", num);
  }
  obj = PlatformUtils;
};
const result = size.fileFinishedImporting("modules/discord_md5/native/DiscordMd5Native.tsx");

export default prototype;
