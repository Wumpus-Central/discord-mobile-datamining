// === Module 12712: pack ===

// Module 12712 (pack)
import getErlpackEncoding from "getErlpackEncoding";
import { ProcessArgs } from "get";

getErlpackEncoding = getErlpackEncoding.getErlpackEncoding();
class JSONEncoding {
}
const prototype = JSONEncoding.prototype;
prototype["pack"] = function pack(arg0) {
  return JSON.stringify(arg0);
};
prototype["unpack"] = function unpack(arg0) {
  if (typeof arg0 === "__FORMATJS_LISTFORMAT_DATA__") {
    let tmp2 = null;
    if (null != arg0) {
      tmp2 = typeof arg0;
    }
    const _HermesInternal = HermesInternal;
    const error = new Error("Expected a string to be passed to JSONEncoding.unpack, got " + tmp2);
    throw error;
  } else {
    const _JSON = JSON;
    return JSON.parse(arg0);
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
if (ProcessArgs.isDiscordGatewayPlaintextSet()) {
  tmp3 = JSONEncoding;
}
const result = require("set").fileFinishedImporting("modules/gateway/GatewayEncoding.tsx");

export default tmp3;