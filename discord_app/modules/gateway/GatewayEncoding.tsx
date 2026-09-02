// === Module 13509: pack ===

// Module 13509 (pack)
import set from "set" /* 2 */;
import get from "get" /* 5093 */;
import getErlpackEncoding from "getErlpackEncoding" /* 13510 */;

getErlpackEncoding = getErlpackEncoding.getErlpackEncoding();
class JSONEncoding {
}
const prototype = JSONEncoding.prototype;
prototype["pack"] = function pack(arg0) {
  return JSON.stringify(arg0);
};
prototype["unpack"] = function unpack(str) {
  if (typeof str !== "string") {
    let tmp2 = null;
    if (null != str) {
      tmp2 = typeof str;
    }
    const _HermesInternal = HermesInternal;
    error = new Error("Expected a string to be passed to JSONEncoding.unpack, got " + tmp2);
    throw error;
  } else {
    const _JSON = JSON;
    return JSON.parse(str);
  }
};
prototype["getName"] = function getName() {
  return "json";
};
prototype["wantsString"] = function wantsString() {
  return true;
};
let tmp3 = JSONEncoding;
if (undefined !== getErlpackEncoding) {
  tmp3 = getErlpackEncoding;
}
const ProcessArgs = get.ProcessArgs;
if (ProcessArgs.isDiscordGatewayPlaintextSet()) {
  tmp3 = JSONEncoding;
}
const result = set.fileFinishedImporting("modules/gateway/GatewayEncoding.tsx");

export default tmp3;