// discord_common/js/shared/utils/PlatformUtils.tsx
import set from "../../../../_runtime/00002_set.js";

let obj = { WINDOWS: "WINDOWS", OSX: "OSX", LINUX: "LINUX", WEB: "WEB" };
let c1 = true;
const android = "android";
const result = set.fileFinishedImporting("../discord_common/js/shared/utils/PlatformUtils.tsx");

export const PlatformTypes = obj;
export const isPlatformEmbedded = true;
export const isWindows = function isWindows() {
  return /^win/.test(android);
};
export function isMac() {
  return false;
}
export function isLinux() {
  return false;
}
export const isDesktop = function isDesktop() {
  return /^win/.test(android) || false;
};
export function isWeb() {
  return false;
}
export const isAndroidChrome = function isAndroidChrome() {
  let tmp = null != navigator.userAgent;
  if (tmp) {
    const _navigator = navigator;
    tmp = null != navigator.userAgent.toLowerCase().match("(android ).+chrome/[.0-9]* mobile");
    const str = navigator.userAgent;
    const str2 = navigator.userAgent.toLowerCase();
  }
  return tmp;
};
export const isAndroidWeb = function isAndroidWeb() {
  let match;
  if (navigator.userAgent != null) {
    match = str.match(/android/i);
  }
  return null != match;
};
export const isMacWeb = function isMacWeb() {
  let match;
  if (navigator.userAgent != null) {
    match = str.match(/Macintosh/i);
  }
  return null != match;
};
export function isAndroid() {
  return true;
}
export function isIOS() {
  return false;
}
export const isOculusWeb = function isOculusWeb() {
  let match;
  if (navigator.userAgent != null) {
    match = str.match(/OculusBrowser/i);
  }
  return null != match;
};
export const platformPrefersDeepLink = function platformPrefersDeepLink() {
  let match;
  if (navigator.userAgent != null) {
    match = str.match(/OculusBrowser/i);
  }
  return null != match;
};
export const platformSupportsActivityJoin = function platformSupportsActivityJoin() {
  let tmp = /^win/.test(android) || false;
  if (!tmp) {
    const _navigator = navigator;
    let match;
    if (navigator.userAgent != null) {
      match = str.match(/OculusBrowser/i);
    }
    tmp = null != match;
  }
  if (!tmp) {
    tmp = c1;
  }
  return tmp;
};
export const getPlatform = function getPlatform() {
  obj = /^win/;
  return obj.test(android) ? obj.WINDOWS : obj.WEB;
};
export function getPlatformName() {
  return android;
}
export function getNativePlatform() {
  if ("ios" !== android) {
    if ("android" !== tmp) {
      return "web";
    }
  }
  return android;
}
export const getOS = function getOS() {
  return "android";
};
export const getNewUpdaterPlatformName = function getNewUpdaterPlatformName() {
  if (obj.test(android)) {
    return "win";
  }
  obj = /^win/;
};