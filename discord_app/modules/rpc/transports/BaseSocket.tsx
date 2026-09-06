// discord_app/modules/rpc/transports/BaseSocket.tsx
import _modDef12 from "../../../../_runtime/metro/00012__.js";
import RPCErrorDefault from "../RPCError.tsx";
import Constants from "../../../Constants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

({ RPC_VERSION: c2, RPCCloseCodes: c3 } = Constants);
const result = size.fileFinishedImporting("modules/rpc/transports/BaseSocket.tsx");
class BaseSocket {
  constructor(arg0, arg1, arg2) {
    merged = Object.assign({ id: null, authorization: null, application: null, abortController: null });
    obj2 = closure_0(closure_1[1]);
    merged[0] = obj2.uniqueId();
    obj = { authing: false, scopes: [], accessToken: null, expires: null };
    date = new Date(0);
    obj.expires = date;
    merged[1] = obj;
    merged[2] = { id: null, name: null, icon: null };
    abortController = new AbortController();
    merged[3] = abortController;
    merged.source = global;
    merged.version = require;
    merged.encoding = importDefault;
    checkRpcVersionResult = merged.checkRpcVersion(require);
    return merged;
  }
}
const prototype = BaseSocket.prototype;
prototype["checkRpcVersion"] = function checkRpcVersion(version) {
  let tmp2 = RPCErrorDefault;
  tmp2 = new tmp2({ closeCode: constants.INVALID_VERSION }, "Invalid Version: " + version);
  throw tmp2;
};
Object.defineProperty(prototype, "transport", {
  get: function transport() {
    return this.source.type;
  },
  set: undefined,
});

export default BaseSocket;
