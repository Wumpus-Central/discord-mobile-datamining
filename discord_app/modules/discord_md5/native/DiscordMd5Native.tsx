// === Module 5156: DiscordMd5Native ===

// Module 5156 (DiscordMd5Native)
import _mod17 from "module_17" /* 17 */;
import NativeFileModuleDefault from "NativeFileModule" /* 1152 */;
import DiscordMd5 from "DiscordMd5" /* 5157 */;
import size from "module_2" /* 2 */;

const NativeModules = _mod17.NativeModules;
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
    if (null == NativeFileModuleDefault) {
      const _Error = Error;
      const error = new Error("RTNFileManager doesn't exist?");
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
const result = size.fileFinishedImporting("modules/discord_md5/native/DiscordMd5Native.tsx");

export default prototype;