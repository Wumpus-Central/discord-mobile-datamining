// === Module 15677: polyfillsNative ===

// Module 15677 (polyfillsNative)
import q from "q" /* 1247 */;
import Buffer from "Buffer" /* 1266 */;
import _mod15772 from "module_15772" /* 15772 */;
import Logger from "Logger" /* 3 */;
import module_15678 from "module_15678" /* 15678 */;
import get_ActivityIndicator from "module_15748" /* 15748 */;
import _typeof from "module_15766" /* 15766 */;
import GetOption from "module_15769" /* 15769 */;
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
  const _module5 = _mod15772;
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