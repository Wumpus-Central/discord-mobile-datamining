import { TransportTypes } from "RPC_SCOPE_CONFIG";
import { RPCCloseCodes } from "ME";
import "checkRpcVersion";

class WindowProxySocket extends tmp2 {
  constructor(arg0) {
    ({ origin, postMessageToRPCClient, frameId, encoding, logger } = global);
    ({ postClose, onSendingToRPCClient } = global);
    tmp = new tmp(TransportTypes.POST_MESSAGE, global.version, encoding, tmp2, new.target, tmp, new.target, origin, postMessageToRPCClient, frameId, logger, encoding);
    // ThrowIfThisInitialized (0x7c)
    items = ["etf", "json"];
    if (-1 === items.indexOf(encoding)) {
      tmp13 = closure_0;
      tmp14 = closure_1;
      obj = { closeCode: null };
      tmp16 = RPCCloseCodes;
      obj[0] = RPCCloseCodes.INVALID_ENCODING;
      tmp17 = globalThis;
      _HermesInternal = HermesInternal;
      str2 = "Invalid Encoding: ";
      tmp15 = require("prototype");
      tmp18 = new.target;
      tmp19 = new.target;
      tmp20 = obj;
      tmp15 = new tmp15(obj, "Invalid Encoding: " + encoding);
      tmp22 = tmp15;
      throw tmp15;
    } else {
      str3 = "etf";
      if ("etf" === encoding) {
        tmp5 = closure_0;
        tmp6 = closure_1;
        obj = { closeCode: null };
        tmp7 = RPCCloseCodes;
        obj[0] = RPCCloseCodes.INVALID_ENCODING;
        tmp8 = new.target;
        str = "Erlpack cannot be used on this client";
        tmp9 = new.target;
        tmp10 = obj;
        tmp11 = new require("prototype")(obj, "Erlpack cannot be used on this client");
        tmp12 = tmp11;
        throw tmp11;
      } else {
        tmp4 = tmp;
        tmp.origin = origin;
        tmp.postMessageToRPCClient = postMessageToRPCClient;
        tmp.frameId = frameId;
        tmp.logger = logger;
        tmp.postClose = postClose;
        tmp.onSendingToRPCClient = onSendingToRPCClient;
        flag = false;
        tmp.closed = false;
        return tmp;
      }
    }
  }
}
const prototype = WindowProxySocket.prototype;
prototype["send"] = function send(arg0) {
  const self = this;
  const onSendingToRPCClient = this.onSendingToRPCClient;
  if (onSendingToRPCClient != null) {
    onSendingToRPCClient(arg0, self.id);
  }
  const items = [importDefault(10639).FRAME, arg0];
  const result = self.postMessageToRPCClient(items, self.origin);
};
prototype["close"] = function close(arg0, arg1) {
  const self = this;
  if (!this.closed) {
    const obj = { code: null, message: null };
    obj[0] = arg0;
    obj[1] = arg1;
    self.postClose(self.origin, obj, self.postMessageToRPCClient);
  }
  self.closed = true;
};
let result = require("checkRpcVersion").fileFinishedImporting("modules/rpc/transports/PostMessageProxySocket.tsx");

export default WindowProxySocket;