// === Module 9452: checkRpcVersion ===

// Module 9452 (checkRpcVersion)
import set from "set" /* 2 */;
import applyDefault from "apply" /* 12 */;
import prototypeDefault from "prototype" /* 9442 */;
import ME from "ME" /* 676 */;

({ RPC_VERSION: obj1, RPCCloseCodes: c3 } = ME);
const result = set.fileFinishedImporting("modules/rpc/transports/BaseSocket.tsx");
class BaseSocket {
  constructor(arg0, arg1, arg2) {
    obj = Object.create(new.target.prototype);
    obj2 = require("apply");
    obj[0] = obj2.uniqueId();
    obj = { authing: false, scopes: [], accessToken: null, expires: null };
    date = new Date(0);
    obj[3] = date;
    obj[1] = obj;
    obj[2] = { id: null, name: null, icon: null };
    abortController = new AbortController();
    obj[3] = abortController;
    obj.source = global;
    obj.version = require;
    obj.encoding = importDefault;
    checkRpcVersionResult = obj.checkRpcVersion(require);
    return obj;
  }
}
const prototype = BaseSocket.prototype;
prototype["checkRpcVersion"] = function checkRpcVersion(version) {
  let tmp2 = prototypeDefault;
  tmp2 = new tmp2({ closeCode: constants.INVALID_VERSION }, "Invalid Version: " + version);
  throw tmp2;
};
Object.defineProperty(prototype, "transport", {
  get: function transport(arg0) {
    return this.source.type;
  },
  set: undefined
});

export default BaseSocket;