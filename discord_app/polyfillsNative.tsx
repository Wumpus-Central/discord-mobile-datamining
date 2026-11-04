// === Module 16369: polyfillsNative ===

// Module 16369 (polyfillsNative)
import q from "q" /* 1248 */;
import Buffer from "Buffer" /* 1263 */;
import _mod16464 from "module_16464" /* 16464 */;
import Logger from "Logger" /* 3 */;
import module_16370 from "module_16370" /* 16370 */;
import get_ActivityIndicator from "module_16440" /* 16440 */;
import _typeof from "module_16458" /* 16458 */;
import GetOption from "module_16461" /* 16461 */;
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
  const _module5 = _mod16464;
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