// === Module 13631: GatewayEncoding ===

// Module 13631 (GatewayEncoding)
import ProcessArgs2 from "ProcessArgs" /* 5141 */;
import GatewayEncodingErlpackEncoding from "GatewayEncodingErlpackEncoding" /* 13632 */;
import size from "module_2" /* 2 */;

GatewayEncodingErlpackEncoding = GatewayEncodingErlpackEncoding.getErlpackEncoding();
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
    const error = new Error("Expected a string to be passed to JSONEncoding.unpack, got " + tmp2);
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
if (undefined !== GatewayEncodingErlpackEncoding) {
  tmp3 = GatewayEncodingErlpackEncoding;
}
const ProcessArgs = ProcessArgs2.ProcessArgs;
if (ProcessArgs.isDiscordGatewayPlaintextSet()) {
  tmp3 = JSONEncoding;
}
const result = size.fileFinishedImporting("modules/gateway/GatewayEncoding.tsx");

export default tmp3;