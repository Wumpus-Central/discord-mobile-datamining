// === Module 14382: polyfillsNative ===

// Module 14382 (polyfillsNative)
import q from "q" /* 1236 */;
import Buffer from "Buffer" /* 1251 */;
import _mod14477 from "module_14477" /* 14477 */;
import Logger from "Logger" /* 3 */;
import module_14383 from "module_14383" /* 14383 */;
import get_ActivityIndicator from "module_14453" /* 14453 */;
import _typeof from "module_14471" /* 14471 */;
import GetOption from "module_14474" /* 14474 */;
import size from "module_2" /* 2 */;

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
  const _module5 = _mod14477;
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
const result = size.fileFinishedImporting("polyfillsNative.tsx");