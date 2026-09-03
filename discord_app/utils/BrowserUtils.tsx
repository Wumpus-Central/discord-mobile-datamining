// === Module 4836: num2 ===

// Module 4836 (num2)
import formatDefault from "format" /* 4837 */;

let str = formatDefault.name;
if (str == null) {
  str = "unknown";
}
const str2 = str.toLowerCase();
let num = -1;
let num2 = -1;
if ("chrome" === str2.toLowerCase()) {
  let str3 = formatDefault.version;
  if (str3 == null) {
    str3 = "";
  }
  num2 = parseInt(str3, 10);
}
let parsed = num;
if ("electron" === str2.toLowerCase()) {
  let str4 = formatDefault.version;
  if (str4 == null) {
    str4 = "";
  }
  parsed = parseInt(str4, 10);
}
let parsed1 = num;
if ("firefox" === str2.toLowerCase()) {
  let str5 = formatDefault.version;
  if (str5 == null) {
    str5 = "";
  }
  parsed1 = parseInt(str5, 10);
}
let parsed2 = num;
if ("edge" === str2.toLowerCase()) {
  let str6 = formatDefault.version;
  if (str6 == null) {
    str6 = "";
  }
  parsed2 = parseInt(str6, 10);
}
if ("safari" === str2.toLowerCase()) {
  let str7 = formatDefault.version;
  if (str7 == null) {
    str7 = "";
  }
  num = parseInt(str7, 10);
}
function getChromeVersion() {
  return num2;
}
function getElectronVersion() {
  return parsed;
}
function getFirefoxVersion() {
  return parsed1;
}
function getEdgeVersion() {
  return parsed2;
}
function getSafariVersion() {
  return num;
}
function isSafari() {
  let str = arg0;
  if (arg0 === undefined) {
    const _navigator = navigator;
    str = navigator.userAgent;
  }
  const formatted = str.toLowerCase();
  let tmp2 = -1 !== formatted.indexOf("safari");
  if (tmp2) {
    tmp2 = -1 === formatted.indexOf("chrome");
  }
  if (tmp2) {
    tmp2 = -1 !== formatted.indexOf("version/");
  }
  return tmp2;
}
const result = require("set").fileFinishedImporting("utils/BrowserUtils.tsx");

export { getChromeVersion };
export { getElectronVersion };
export { getFirefoxVersion };
export { getEdgeVersion };
export { getSafariVersion };
export const canUseWebp = function canUseWebp() {
  let tmp = -1 !== num2;
  if (!tmp) {
    tmp = -1 !== parsed;
  }
  if (!tmp) {
    tmp = -1 !== parsed1;
  }
  if (!tmp) {
    tmp = -1 !== parsed2;
  }
  if (!tmp) {
    tmp = num >= 14;
  }
  return tmp;
};
export { isSafari };
export const isFirefox = function isFirefox() {
  let str = arg0;
  if (arg0 === undefined) {
    const _navigator = navigator;
    str = navigator.userAgent;
  }
  const formatted = str.toLowerCase();
  return -1 !== formatted.indexOf("firefox");
};
export const supportsHEVCAlpha = function supportsHEVCAlpha() {
  const _navigator = window.navigator;
  const mediaCapabilities = _navigator.mediaCapabilities;
  let decodingInfo;
  if (mediaCapabilities != null) {
    decodingInfo = mediaCapabilities.decodingInfo;
  }
  let str = _navigator.userAgent;
  if (str === undefined) {
    const _navigator2 = navigator;
    str = navigator.userAgent;
  }
  const formatted = str.toLowerCase();
  let tmp3 = -1 !== formatted.indexOf("safari");
  if (tmp3) {
    tmp3 = -1 === formatted.indexOf("chrome");
  }
  if (tmp3) {
    tmp3 = -1 !== formatted.indexOf("version/");
  }
  if (tmp3) {
    tmp3 = tmp2;
  }
  return tmp3;
};