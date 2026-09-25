// === Module 13829: polyfillsNative ===

// Module 13829 (polyfillsNative)
import q from "q" /* 1237 */;
import Buffer from "Buffer" /* 1252 */;
import _mod13924 from "module_13924" /* 13924 */;
import Logger from "Logger" /* 3 */;
import module_13830 from "module_13830" /* 13830 */;
import get_ActivityIndicator from "module_13900" /* 13900 */;
import _typeof from "module_13918" /* 13918 */;
import GetOption from "module_13921" /* 13921 */;
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
  const _module5 = _mod13924;
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