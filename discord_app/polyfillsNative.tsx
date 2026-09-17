// === Module 14417: polyfillsNative ===

// Module 14417 (polyfillsNative)
import q from "q" /* 1237 */;
import Buffer from "Buffer" /* 1252 */;
import _mod14512 from "module_14512" /* 14512 */;
import Logger from "Logger" /* 3 */;
import module_14418 from "module_14418" /* 14418 */;
import get_ActivityIndicator from "module_14488" /* 14488 */;
import _typeof from "module_14506" /* 14506 */;
import GetOption from "module_14509" /* 14509 */;
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
  const _module5 = _mod14512;
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