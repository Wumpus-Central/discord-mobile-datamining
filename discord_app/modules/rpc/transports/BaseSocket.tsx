import { prototype } from "../RPCError.tsx";
// discord_app/modules/rpc/transports/BaseSocket.tsx
import ME from "ME";

let c3;
let obj1;
({ RPC_VERSION: obj1, RPCCloseCodes: c3 } = ME);
const result = require("prototype").fileFinishedImporting("modules/rpc/transports/BaseSocket.tsx");
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
    obj.transport = global;
    obj.version = require;
    obj.encoding = importDefault;
    checkRpcVersionResult = obj.checkRpcVersion(require);
    return obj;
  }
}
BaseSocket.prototype["checkRpcVersion"] = function checkRpcVersion(version) {
  let tmp2 = prototype;
  tmp2 = new tmp2({ closeCode: constants.INVALID_VERSION }, "Invalid Version: " + version);
  throw tmp2;
};

export default BaseSocket;