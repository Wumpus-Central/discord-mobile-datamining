// === Module 16267: polyfillsNative ===

// Module 16267 (polyfillsNative)
import q from "q" /* 1248 */;
import Buffer from "Buffer" /* 1263 */;
import _mod16362 from "module_16362" /* 16362 */;
import Logger from "Logger" /* 3 */;
import module_16268 from "module_16268" /* 16268 */;
import get_ActivityIndicator from "module_16338" /* 16338 */;
import _typeof from "module_16356" /* 16356 */;
import GetOption from "module_16359" /* 16359 */;
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
  const _module5 = _mod16362;
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