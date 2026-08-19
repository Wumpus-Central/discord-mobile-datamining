// === Module 4857: fromFileUri ===

// Module 4857 (fromFileUri)
import obj132 from "obj132" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import obj1322 from "obj132" /* 500 */;
import enforcingDefault from "enforcing" /* 1271 */;
import fromBlobDefault from "fromBlob" /* 4858 */;

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