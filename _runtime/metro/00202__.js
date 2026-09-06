// _runtime/metro/00202__.js
import get from "00030__.js";

const value = get.get("BlobModule");
let tmp3 = null;
let closure_1 = null;
if (null != value) {
  const obj = {
    getConstants() {
      if (null == constants) {
        constants = value.getConstants();
      }
      return constants;
    },
    addNetworkingHandler() {
      value.addNetworkingHandler();
    },
    addWebSocketHandler(arg0) {
      value.addWebSocketHandler(arg0);
    },
    removeWebSocketHandler(arg0) {
      const result = value.removeWebSocketHandler(arg0);
    },
    sendOverSocket(arg0, arg1) {
      value.sendOverSocket(arg0, arg1);
    },
    createFromParts(arg0, arg1) {
      const fromParts = value.createFromParts(arg0, arg1);
    },
    release(arg0) {
      value.release(arg0);
    },
  };
  tmp3 = obj;
}

export default tmp3;
