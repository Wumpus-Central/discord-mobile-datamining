// discord_app/utils/BrowserUtils.tsx
import _modDef5410 from "../../_runtime/metro/05410__.js";
import size from "../../_runtime/metro/00002__.js";

let str = _modDef5410.name;
if (str == null) {
  str = "unknown";
}
const str2 = str.toLowerCase();
let num = -1;
let num2 = -1;
if ("chrome" === str2.toLowerCase()) {
  const _parseInt = parseInt;
  let str3 = _modDef5410.version;
  if (str3 == null) {
    str3 = "";
  }
  num2 = _parseInt(str3, 10);
}
let _parseInt2Result = num;
if ("electron" === str2.toLowerCase()) {
  const _parseInt2 = parseInt;
  let str4 = _modDef5410.version;
  if (str4 == null) {
    str4 = "";
  }
  _parseInt2Result = _parseInt2(str4, 10);
}
const map = _parseInt2Result;
let _parseInt3Result = num;
if ("firefox" === str2.toLowerCase()) {
  const _parseInt3 = parseInt;
  let str5 = _modDef5410.version;
  if (str5 == null) {
    str5 = "";
  }
  _parseInt3Result = _parseInt3(str5, 10);
}
let c2 = _parseInt3Result;
let _parseInt4Result = num;
if ("edge" === str2.toLowerCase()) {
  const _parseInt4 = parseInt;
  let str6 = _modDef5410.version;
  if (str6 == null) {
    str6 = "";
  }
  _parseInt4Result = _parseInt4(str6, 10);
}
let c3 = _parseInt4Result;
if ("safari" === str2.toLowerCase()) {
  const _parseInt5 = parseInt;
  let str7 = _modDef5410.version;
  if (str7 == null) {
    str7 = "";
  }
  num = _parseInt5(str7, 10);
}
function getChromeVersion() {
  return num2;
}
function getElectronVersion() {
  return map;
}
function getFirefoxVersion() {
  return c2;
}
function getEdgeVersion() {
  return c3;
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
  const tmp2 =
    -1 !== formatted.indexOf("safari") && -1 === formatted.indexOf("chrome") && -1 !== formatted.indexOf("version/");
  return tmp2;
}
const result = size.fileFinishedImporting("utils/BrowserUtils.tsx");

export { getChromeVersion };
export { getElectronVersion };
export { getFirefoxVersion };
export { getEdgeVersion };
export { getSafariVersion };
export const canUseWebp = function canUseWebp() {
  return -1 !== num2 || -1 !== map || -1 !== c2 || -1 !== c3 || num >= 14;
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
  const tmp2 = null != decodingInfo;
  if (str === undefined) {
    const _navigator2 = navigator;
    str = navigator.userAgent;
  }
  const formatted = str.toLowerCase();
  const tmp3 =
    -1 !== formatted.indexOf("safari") &&
    -1 === formatted.indexOf("chrome") &&
    -1 !== formatted.indexOf("version/") &&
    tmp2;
  return tmp3;
};
