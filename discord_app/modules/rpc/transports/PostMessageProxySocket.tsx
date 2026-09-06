// discord_app/modules/rpc/transports/PostMessageProxySocket.tsx
import Constants from "../../../Constants.tsx";
import RPCOpcodesDefault from "../RPCOpcodes.tsx";
import RPCErrorDefault from "../RPCError.tsx";
import BaseSocket from "BaseSocket.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const RPCCloseCodes = Constants.RPCCloseCodes;
class WindowProxySocket extends tmp2 {
  constructor(arg0) {
    ({ postMessageToRPCClient, encoding, logger } = global);
    ({ postClose, onSendingToRPCClient } = global);
    tmp3 = new WindowProxySocket(
      global.source,
      global.version,
      encoding,
      tmp2,
      tmp,
      new.target,
      new.target,
      postMessageToRPCClient,
      logger,
    );
    items = ["etf", "json"];
    if (-1 === items.indexOf(encoding)) {
      tmp13 = closure_0;
      tmp14 = closure_1;
      obj = { closeCode: null };
      tmp16 = RPCCloseCodes;
      obj.closeCode = RPCCloseCodes.INVALID_ENCODING;
      tmp17 = globalThis;
      _HermesInternal = HermesInternal;
      str3 = "Invalid Encoding: ";
      tmp15 = closure_0(closure_1[2]);
      tmp18 = new.target;
      tmp19 = new.target;
      tmp20 = obj;
      tmp15 = new tmp15(obj, "Invalid Encoding: " + encoding);
      tmp22 = tmp15;
      throw tmp15;
    } else {
      str = "etf";
      if ("etf" === encoding) {
        tmp5 = closure_0;
        tmp6 = closure_1;
        obj = { closeCode: null };
        tmp7 = RPCCloseCodes;
        obj.closeCode = RPCCloseCodes.INVALID_ENCODING;
        tmp8 = new.target;
        str2 = "Erlpack cannot be used on this client";
        tmp9 = new.target;
        tmp10 = obj;
        tmp11 = new closure_0(closure_1[2])(obj, "Erlpack cannot be used on this client");
        tmp12 = tmp11;
        throw tmp11;
      } else {
        tmp4 = tmp3;
        tmp3.postMessageToRPCClient = postMessageToRPCClient;
        tmp3.logger = logger;
        tmp3.postClose = postClose;
        tmp3.onSendingToRPCClient = onSendingToRPCClient;
        flag = false;
        tmp3.closed = false;
        return tmp3;
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
  const items = [RPCOpcodesDefault.FRAME, arg0];
  const result = self.postMessageToRPCClient(items, self.source.origin);
};
prototype["close"] = function close(code, message) {
  const self = this;
  if (!this.closed) {
    const obj = { code, message };
    self.postClose(self.source, obj, self.postMessageToRPCClient);
  }
  self.closed = true;
};
let result = size.fileFinishedImporting("modules/rpc/transports/PostMessageProxySocket.tsx");

export default WindowProxySocket;
