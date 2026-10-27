// === Module 15577: polyfillsNative ===

// Module 15577 (polyfillsNative)
import q from "q" /* 1260 */;
import Buffer from "Buffer" /* 1275 */;
import _mod15672 from "module_15672" /* 15672 */;
import Logger from "Logger" /* 3 */;
import module_15578 from "module_15578" /* 15578 */;
import get_ActivityIndicator from "module_15648" /* 15648 */;
import _typeof from "module_15666" /* 15666 */;
import GetOption from "module_15669" /* 15669 */;
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
  const _module5 = _mod15672;
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