// discord_app/modules/discord_md5/native/DiscordMd5Native.tsx
import set from "../../../../_runtime/00002_set.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import enforcingDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeFileModule.tsx";
import fromBlobDefault from "../DiscordMd5.tsx";

const NativeModules = get_ActivityIndicator.NativeModules;
fromBlobDefault;
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
    if (null == enforcingDefault) {
      const _Error = Error;
      error = new Error("RTNFileManager doesn't exist?");
      let rejectResult = Promise.reject(error);
    } else {
      rejectResult = tmp3(1152).getFileHash(uri, "md5", num);
      const tmp3Result = tmp3(1152);
    }
    tmp3 = importDefault;
  } else {
    const DCDFileManager = NativeModules.DCDFileManager;
    return DCDFileManager.getFileHash(uri, "md5", num);
  }
};
const result = set.fileFinishedImporting("modules/discord_md5/native/DiscordMd5Native.tsx");

export default prototype;
