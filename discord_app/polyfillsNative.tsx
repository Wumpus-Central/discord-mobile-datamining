// === Module 15320: polyfillsNative ===

// Module 15320 (polyfillsNative)
import q from "q" /* 1263 */;
import Buffer from "Buffer" /* 1278 */;
import _mod15415 from "module_15415" /* 15415 */;
import Logger from "Logger" /* 3 */;
import module_15321 from "module_15321" /* 15321 */;
import get_ActivityIndicator from "module_15391" /* 15391 */;
import _typeof from "module_15409" /* 15409 */;
import GetOption from "module_15412" /* 15412 */;
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
  const _module5 = _mod15415;
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