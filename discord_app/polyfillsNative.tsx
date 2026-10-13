// === Module 14868: polyfillsNative ===

// Module 14868 (polyfillsNative)
import q from "q" /* 1261 */;
import Buffer from "Buffer" /* 1276 */;
import _mod14963 from "module_14963" /* 14963 */;
import Logger from "Logger" /* 3 */;
import module_14869 from "module_14869" /* 14869 */;
import get_ActivityIndicator from "module_14939" /* 14939 */;
import _typeof from "module_14957" /* 14957 */;
import GetOption from "module_14960" /* 14960 */;
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
  const _module5 = _mod14963;
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