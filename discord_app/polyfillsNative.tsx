// === Module 15532: polyfillsNative ===

// Module 15532 (polyfillsNative)
import q from "q" /* 1247 */;
import Buffer from "Buffer" /* 1266 */;
import _mod15627 from "module_15627" /* 15627 */;
import Logger from "Logger" /* 3 */;
import module_15533 from "module_15533" /* 15533 */;
import get_ActivityIndicator from "module_15603" /* 15603 */;
import _typeof from "module_15621" /* 15621 */;
import GetOption from "module_15624" /* 15624 */;
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
  const _module5 = _mod15627;
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