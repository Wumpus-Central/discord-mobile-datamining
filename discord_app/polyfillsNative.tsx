// discord_app/polyfillsNative.tsx
import set from "../_runtime/00002_set.js";
import Buffer from "../_runtime/00511_Buffer.js";
import q from "../_runtime/01214_q.js";
import _isNativeReflectConstruct from "../_runtime/13764__isNativeReflectConstruct.js";
import timestamp from "modules/debug/Logger.tsx";
import 13670__ from "../_runtime/metro/13670__.js";
import get_ActivityIndicator from "../_runtime/13740_get_ActivityIndicator.js";
import _typeof from "../_runtime/metro/13758__typeof.js";
import GetOption from "../_runtime/13761_GetOption.js";

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
  const _module5 = _isNativeReflectConstruct;
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
const result = set.fileFinishedImporting("polyfillsNative.tsx");