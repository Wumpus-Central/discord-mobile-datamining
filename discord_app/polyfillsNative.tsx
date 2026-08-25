// === Module 13762: ? ===

// Module 13762
import set from "set" /* 2 */;
import Buffer from "Buffer" /* 511 */;
import q from "q" /* 1214 */;
import _isNativeReflectConstruct from "_isNativeReflectConstruct" /* 13857 */;
import timestamp from "timestamp" /* 3 */;
import module_13763 from "module_13763" /* 13763 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 13833 */;
import _typeof from "_typeof" /* 13851 */;
import GetOption from "GetOption" /* 13854 */;

if (typeof process === "undefined") {
  const _window3 = window;
  window.process = {};
}
window.process.nextTick = setImmediate;
if (null == global.location) {
  global.location = { protocol: "https:", host: "discord.com" };
}
if (!global.self) {
  global.self = global;
}
if (null == window.crypto) {
  const _module5 = _isNativeReflectConstruct;
  const _window = window;
  window.crypto = global.crypto;
}
if (null == global.Buffer) {
  global.Buffer = Buffer.Buffer;
}
if (null == global.__reanimatedWorkletInit) {
  global.__reanimatedWorkletInit = () => {

  };
}
const fn = function() {
  return Array.from(this);
};
Map.prototype.toJSON = fn;
Set.prototype.toJSON = fn;
let tmp7 = null != window.TextEncoder;
if (tmp7) {
  const _window2 = window;
  tmp7 = null != window.TextDecoder;
}
if (!tmp7) {
  const _module6 = q;
}
const result = set.fileFinishedImporting("polyfillsNative.tsx");