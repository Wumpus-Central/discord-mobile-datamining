// === Module 13075: parsed ===

// Module 13075 (parsed)
import formatDefault from "format" /* 669 */;

let str = formatDefault.version;
if (str == null) {
  str = "0";
}
const parsed = parseInt(str, 10);
let tmp3 = null != formatDefault.ua;
if (tmp3) {
  const ua = formatDefault.ua;
  tmp3 = ua.indexOf("OculusBrowser") > -1;
}
if (typeof window === "undefined") {
  const name = formatDefault.name;
  if ("IE" === name) {
    let flag = parsed >= 15;
  } else {
    flag = true;
  }
} else {
  const _window = window;
  flag = false;
}
let tmp4 = tmp3;
if (!tmp3) {
  let tmp5 = "Firefox" === formatDefault.name;
  if (tmp5) {
    tmp5 = parsed >= 80;
  }
  tmp4 = tmp5;
}
if (!tmp4) {
  let tmp6 = "Chrome" === formatDefault.name;
  if (tmp6) {
    tmp6 = parsed >= 37;
  }
  tmp4 = tmp6;
}
if (!tmp4) {
  let tmp7 = "Opera" === formatDefault.name;
  if (tmp7) {
    tmp7 = parsed >= 66;
  }
  tmp4 = tmp7;
}
if (!tmp4) {
  let tmp8 = "Node.js" === formatDefault.name;
  if (tmp8) {
    tmp8 = parsed >= 6;
  }
  tmp4 = tmp8;
}
if (!tmp4) {
  let tmp9 = "Electron" === formatDefault.name;
  if (tmp9) {
    tmp9 = parsed >= 1;
  }
  tmp4 = tmp9;
}
if (!tmp4) {
  let tmp10 = "Safari" === formatDefault.name;
  if (tmp10) {
    tmp10 = parsed >= 13;
  }
  tmp4 = tmp10;
}
if (!tmp4) {
  let tmp11 = "Microsoft Edge" === formatDefault.name;
  if (tmp11) {
    tmp11 = parsed >= 37;
  }
  tmp4 = tmp11;
}
let tmp12 = "Chrome" === formatDefault.name;
if (!tmp12) {
  tmp12 = "Safari" === formatDefault.name;
}
if (!tmp12) {
  let tmp13 = "Firefox" === formatDefault.name;
  if (tmp13) {
    tmp13 = parsed >= 80;
  }
  tmp12 = tmp13;
}
if (!tmp12) {
  tmp12 = "Opera" === formatDefault.name;
}
if (!tmp12) {
  tmp12 = "Microsoft Edge" === formatDefault.name;
}
let tmp14 = typeof globalThis.RTCPeerConnection !== "undefined";
if (typeof globalThis.RTCPeerConnection !== "undefined") {
  tmp14 = typeof globalThis.RTCPeerConnection.prototype.addTransceiver === "function";
}
let tmp15 = typeof globalThis.RTCRtpSender !== "undefined";
if (typeof globalThis.RTCRtpSender !== "undefined") {
  let tmp16 = "transform" in globalThis.RTCRtpSender.prototype;
  if (!tmp16) {
    tmp16 = "createEncodedStreams" in globalThis.RTCRtpSender.prototype;
  }
  tmp15 = tmp16;
}
let tmp17 = "Chrome" === formatDefault.name;
if (tmp17) {
  tmp17 = parsed >= 58;
}
if (!tmp17) {
  let tmp18 = "Safari" === formatDefault.name;
  if (tmp18) {
    tmp18 = parsed >= 15;
  }
  tmp17 = tmp18;
}
if (!tmp17) {
  let tmp19 = "Firefox" === formatDefault.name;
  if (tmp19) {
    tmp19 = parsed >= 108;
  }
  tmp17 = tmp19;
}
let tmp20 = "Chrome" === formatDefault.name;
if (tmp20) {
  tmp20 = parsed >= 72;
}
if (!tmp20) {
  let tmp21 = "Safari" === formatDefault.name;
  if (tmp21) {
    tmp21 = parsed >= 11;
  }
  tmp20 = tmp21;
}
if (!tmp20) {
  let tmp22 = "Opera" === formatDefault.name;
  if (tmp22) {
    tmp22 = parsed >= 60;
  }
  tmp20 = tmp22;
}
if (!tmp20) {
  let tmp23 = "Microsoft Edge" === formatDefault.name;
  if (tmp23) {
    tmp23 = parsed >= 79;
  }
  tmp20 = tmp23;
}
const result = require("set").fileFinishedImporting("../discord_common/js/shared/utils/BrowserConstants.tsx");

export const BROWSER_VERSION = parsed;
export const IS_OCULUS_BROWSER = tmp3;
export const IS_APP_COMPATIBLE_BROWSER = flag;
export const BROWSER_SUPPORTS_VOICE = tmp4;
export const BROWSER_SUPPORTS_VIDEO = tmp12;
export const BROWSER_SUPPORTS_UNIFIED_PLAN = tmp14;
export const BROWSER_SUPPORTS_ENCODED_TRANSFORMS = tmp15;
export const BROWSER_SUPPORTS_DIAGNOSTICS = tmp17;
export const BROWSER_SUPPORTS_CONNECTION_STATE = tmp20;