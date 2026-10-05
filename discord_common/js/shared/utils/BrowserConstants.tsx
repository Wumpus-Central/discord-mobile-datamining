// === Module 13613: BrowserConstants ===

// Module 13613 (BrowserConstants)
import _modDef1351 from "module_1351" /* 1351 */;
import size from "module_2" /* 2 */;

let flag;
const _parseInt = parseInt;
let str = _modDef1351.version;
if (str == null) {
  str = "0";
}
const _parseIntResult = _parseInt(str, 10);
let tmp3 = null != _modDef1351.ua;
if (tmp3) {
  const ua = _modDef1351.ua;
  tmp3 = ua.indexOf("OculusBrowser") > -1;
}
if (typeof window === "undefined") {
  const name = _modDef1351.name;
  if ("IE" === name) {
    flag = _parseIntResult >= 15;
  } else {
    flag = true;
  }
} else {
  const _window = window;
  flag = false;
}
let tmp4 = tmp3;
if (!tmp4) {
  tmp4 = "Firefox" === _modDef1351.name && _parseIntResult >= 80;
  const tmp5 = "Firefox" === _modDef1351.name && _parseIntResult >= 80;
}
if (!tmp4) {
  tmp4 = "Chrome" === _modDef1351.name && _parseIntResult >= 37;
  const tmp6 = "Chrome" === _modDef1351.name && _parseIntResult >= 37;
}
if (!tmp4) {
  tmp4 = "Opera" === _modDef1351.name && _parseIntResult >= 66;
  const tmp7 = "Opera" === _modDef1351.name && _parseIntResult >= 66;
}
if (!tmp4) {
  tmp4 = "Node.js" === _modDef1351.name && _parseIntResult >= 6;
  const tmp8 = "Node.js" === _modDef1351.name && _parseIntResult >= 6;
}
if (!tmp4) {
  tmp4 = "Electron" === _modDef1351.name && _parseIntResult >= 1;
  const tmp9 = "Electron" === _modDef1351.name && _parseIntResult >= 1;
}
if (!tmp4) {
  tmp4 = "Safari" === _modDef1351.name && _parseIntResult >= 13;
  const tmp10 = "Safari" === _modDef1351.name && _parseIntResult >= 13;
}
if (!tmp4) {
  tmp4 = "Microsoft Edge" === _modDef1351.name && _parseIntResult >= 37;
  const tmp11 = "Microsoft Edge" === _modDef1351.name && _parseIntResult >= 37;
}
let tmp12 = "Chrome" === _modDef1351.name || "Safari" === _modDef1351.name;
if (!tmp12) {
  tmp12 = "Firefox" === _modDef1351.name && _parseIntResult >= 80;
  const tmp13 = "Firefox" === _modDef1351.name && _parseIntResult >= 80;
}
if (!tmp12) {
  tmp12 = "Opera" === _modDef1351.name;
}
if (!tmp12) {
  tmp12 = "Microsoft Edge" === _modDef1351.name;
}
let tmp14 = typeof globalThis.RTCPeerConnection !== "undefined";
if (typeof globalThis.RTCPeerConnection !== "undefined") {
  tmp14 = typeof globalThis.RTCPeerConnection.prototype.addTransceiver === "function";
}
let tmp15 = typeof globalThis.RTCRtpSender !== "undefined";
if (typeof globalThis.RTCRtpSender !== "undefined") {
  const RTCRtpSender2 = globalThis.RTCRtpSender;
  let tmp16 = "transform" in globalThis.RTCRtpSender.prototype;
  if (!tmp16) {
    tmp16 = "createEncodedStreams" in globalThis.RTCRtpSender.prototype;
  }
  tmp15 = tmp16;
}
let tmp17 = "Chrome" === _modDef1351.name && _parseIntResult >= 58;
if (!tmp17) {
  tmp17 = "Safari" === _modDef1351.name && _parseIntResult >= 15;
  const tmp18 = "Safari" === _modDef1351.name && _parseIntResult >= 15;
}
if (!tmp17) {
  tmp17 = "Firefox" === _modDef1351.name && _parseIntResult >= 108;
  const tmp19 = "Firefox" === _modDef1351.name && _parseIntResult >= 108;
}
let tmp20 = "Chrome" === _modDef1351.name && _parseIntResult >= 72;
if (!tmp20) {
  tmp20 = "Safari" === _modDef1351.name && _parseIntResult >= 11;
  const tmp21 = "Safari" === _modDef1351.name && _parseIntResult >= 11;
}
if (!tmp20) {
  tmp20 = "Opera" === _modDef1351.name && _parseIntResult >= 60;
  const tmp22 = "Opera" === _modDef1351.name && _parseIntResult >= 60;
}
if (!tmp20) {
  tmp20 = "Microsoft Edge" === _modDef1351.name && _parseIntResult >= 79;
  const tmp23 = "Microsoft Edge" === _modDef1351.name && _parseIntResult >= 79;
}
const result = size.fileFinishedImporting("../discord_common/js/shared/utils/BrowserConstants.tsx");

export const BROWSER_VERSION = _parseIntResult;
export const IS_OCULUS_BROWSER = tmp3;
export const IS_APP_COMPATIBLE_BROWSER = flag;
export const BROWSER_SUPPORTS_VOICE = tmp4;
export const BROWSER_SUPPORTS_VIDEO = tmp12;
export const BROWSER_SUPPORTS_UNIFIED_PLAN = tmp14;
export const BROWSER_SUPPORTS_ENCODED_TRANSFORMS = tmp15;
export const BROWSER_SUPPORTS_DIAGNOSTICS = tmp17;
export const BROWSER_SUPPORTS_CONNECTION_STATE = tmp20;