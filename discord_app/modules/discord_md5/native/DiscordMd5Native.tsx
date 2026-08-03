// === Module 4815: fromFileUri ===

// Module 4815 (fromFileUri)
import { NativeModules } from "get ActivityIndicator";
import "fromBlob";

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
    if (null == importDefault(1271)) {
      const _Error = Error;
      const error = new Error("RTNFileManager doesn't exist?");
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
const result = require("set").fileFinishedImporting("modules/discord_md5/native/DiscordMd5Native.tsx");

export default prototype;