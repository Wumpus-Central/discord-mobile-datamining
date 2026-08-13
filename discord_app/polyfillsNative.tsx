// discord_app/polyfillsNative.tsx
import timestamp from "_typeof";
import 13626__ from "../_runtime/metro/13626__.js";
import get_ActivityIndicator from "get ActivityIndicator";
import _typeof from "_typeof";
import GetOption from "GetOption";

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
  const _module5 = require("_isNativeReflectConstruct");
  const _window = window;
  window.crypto = global.crypto;
}
if (null == global.Buffer) {
  global.Buffer = require("Buffer").Buffer;
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
  const _module6 = require("q");
}
const result = require("get ActivityIndicator").fileFinishedImporting("polyfillsNative.tsx");