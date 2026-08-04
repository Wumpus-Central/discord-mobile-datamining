// _runtime/00202_BlobModule.js
const value = require("get").get("BlobModule");
let c0 = value;
let tmp3 = null;
let c1 = null;
if (null != value) {
  const obj = { getConstants: null, addNetworkingHandler: null, addWebSocketHandler: null, removeWebSocketHandler: null, sendOverSocket: null, createFromParts: null, release: null };
  obj[0] = function getConstants() {
    if (null == constants) {
      constants = value.getConstants();
    }
    return constants;
  };
  obj[1] = function addNetworkingHandler() {
    value.addNetworkingHandler();
  };
  obj[2] = function addWebSocketHandler(arg0) {
    value.addWebSocketHandler(arg0);
  };
  obj[3] = function removeWebSocketHandler(arg0) {
    const result = value.removeWebSocketHandler(arg0);
  };
  obj[4] = function sendOverSocket(arg0, arg1) {
    value.sendOverSocket(arg0, arg1);
  };
  obj[5] = function createFromParts(arg0, arg1) {
    const fromParts = value.createFromParts(arg0, arg1);
  };
  obj[6] = function release(arg0) {
    value.release(arg0);
  };
  tmp3 = obj;
}

export default tmp3;