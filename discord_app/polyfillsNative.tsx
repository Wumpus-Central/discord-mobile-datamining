// discord_app/polyfillsNative.tsx
import q from "../_runtime/01238_q.js";
import Buffer from "../_runtime/01253_Buffer.js";
import _mod14476 from "../_runtime/metro/14476__.js";
import Logger from "modules/debug/Logger.tsx";
import 14382__ from "../_runtime/metro/14382__.js";
import get_ActivityIndicator from "../_runtime/metro/14452__.js";
import _typeof from "../_runtime/metro/14470__.js";
import GetOption from "../_runtime/metro/14473__.js";
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
  const _module5 = _mod14476;
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