// === Module 16778: polyfillsNative ===

// Module 16778 (polyfillsNative)
import q from "q" /* 1248 */;
import Buffer from "Buffer" /* 1267 */;
import _mod16873 from "module_16873" /* 16873 */;
import Logger from "Logger" /* 3 */;
import module_16779 from "module_16779" /* 16779 */;
import get_ActivityIndicator from "module_16849" /* 16849 */;
import _typeof from "module_16867" /* 16867 */;
import GetOption from "module_16870" /* 16870 */;
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
  const _module5 = _mod16873;
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