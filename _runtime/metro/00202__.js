// === Module 202: ? ===

// Module 202
import get from "module_30" /* 30 */;

let constants;

function getConstants() {
  if (null == constants) {
    constants = _window.getConstants();
  }
  return constants;
}
function addNetworkingHandler() {
  _window.addNetworkingHandler();
}
function addWebSocketHandler(arg0) {
  _window.addWebSocketHandler(arg0);
}
function removeWebSocketHandler(arg0) {
  const result = _window.removeWebSocketHandler(arg0);
}
function sendOverSocket(arg0, arg1) {
  _window.sendOverSocket(arg0, arg1);
}
function createFromParts(arg0, arg1) {
  const fromParts = _window.createFromParts(arg0, arg1);
}
function release(arg0) {
  _window.release(arg0);
}
const value = get.get("BlobModule");
const _window = value;
let tmp3 = null;
let closure_1 = null;
if (null != value) {
  tmp3 = { getConstants, addNetworkingHandler, addWebSocketHandler, removeWebSocketHandler, sendOverSocket, createFromParts, release };
  const obj = { getConstants, addNetworkingHandler, addWebSocketHandler, removeWebSocketHandler, sendOverSocket, createFromParts, release };
}

export default tmp3;