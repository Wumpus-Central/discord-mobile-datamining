// === Module 5052: fromFileUri ===

// Module 5052 (fromFileUri)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import enforcingDefault from "enforcing" /* 1271 */;
import fromBlobDefault from "fromBlob" /* 5053 */;

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
      rejectResult = tmp3(1271).getFileHash(uri, "md5", num);
      const tmp3Result = tmp3(1271);
    }
    tmp3 = importDefault;
  } else {
    const DCDFileManager = NativeModules.DCDFileManager;
    return DCDFileManager.getFileHash(uri, "md5", num);
  }
};
const result = set.fileFinishedImporting("modules/discord_md5/native/DiscordMd5Native.tsx");

export default prototype;