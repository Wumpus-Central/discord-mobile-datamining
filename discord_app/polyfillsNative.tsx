// === Module 14293: ? ===

// Module 14293
import set from "set" /* 2 */;
import q from "q" /* 1238 */;
import Buffer from "Buffer" /* 1253 */;
import _isNativeReflectConstruct from "_isNativeReflectConstruct" /* 14388 */;
import timestamp from "timestamp" /* 3 */;
import module_14294 from "module_14294" /* 14294 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 14364 */;
import _typeof from "_typeof" /* 14382 */;
import GetOption from "GetOption" /* 14385 */;

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