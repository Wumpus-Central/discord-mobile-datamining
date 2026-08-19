// discord_app/modules/discord_md5/native/DiscordMd5Native.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import obj1322 from "../../../utils/PlatformUtils.tsx";
import enforcingDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeFileModule.tsx";
import fromBlobDefault from "../DiscordMd5.tsx";

const NativeModules = get_ActivityIndicator.NativeModules;
fromBlobDefault;
const prototype = function DiscordMd5Native() {
  return HermesBuiltin.applyArguments(new.target, new.target);
}.prototype;
class prototype extends tmp2 {
}
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
      rejectResult = enforcingDefault.getFileHash(uri, "md5", num);
      const tmp3Result = enforcingDefault;
    }
  } else {
    const DCDFileManager = NativeModules.DCDFileManager;
    return DCDFileManager.getFileHash(uri, "md5", num);
  }
  obj = obj1322;
};
const result = obj132.fileFinishedImporting("modules/discord_md5/native/DiscordMd5Native.tsx");

export default prototype;