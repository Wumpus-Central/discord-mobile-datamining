// discord_app/polyfillsNative.tsx
import _mod1248 from "../_runtime/metro/01248__.js";
import Buffer from "../_runtime/01263_Buffer.js";
import _mod14170 from "../_runtime/metro/14170__.js";
import Logger from "modules/debug/Logger.tsx";
import 14076__ from "../_runtime/metro/14076__.js";
import react_native from "../_runtime/14146_react-native.js";
import getPluralRules from "../_runtime/14164_getPluralRules.js";
import 14167__ from "../_runtime/metro/14167__.js";
import size from "../_runtime/metro/00002__.js";

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
  const _module5 = _mod14170;
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
  const _module6 = _mod1248;
}
const result = size.fileFinishedImporting("polyfillsNative.tsx");