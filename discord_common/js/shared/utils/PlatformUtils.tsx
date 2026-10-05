// === Module 1370: utils/PlatformUtils ===

// Module 1370 (utils/PlatformUtils)
import size from "module_2" /* 2 */;

const PlatformTypes = { WINDOWS: "WINDOWS", OSX: "OSX", LINUX: "LINUX", WEB: "WEB" };
let c1 = true;
const android = "android";
const result = size.fileFinishedImporting("../discord_common/js/shared/utils/PlatformUtils.tsx");

export { PlatformTypes };
export const isPlatformEmbedded = true;
export const isWindows = function isWindows() {
  const obj = /^win/;
  return obj.test(android);
};
export function isMac() {
  return false;
}
export function isLinux() {
  return false;
}
export const isDesktop = function isDesktop() {
  const obj = /^win/;
  const tmp = obj.test(android) || false;
  return tmp;
};
export function isWeb() {
  return false;
}
export const isAndroidChrome = function isAndroidChrome() {
  let tmp = null != navigator.userAgent;
  if (tmp) {
    const _navigator = navigator;
    const str = navigator.userAgent;
    const str2 = str.toLowerCase();
    tmp = null != str2.match("(android ).+chrome/[.0-9]* mobile");
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
  const obj = /^win/;
  let tmp = obj.test(android) || false;
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
  const obj = /^win/;
  return obj.test(android) ? obj.WINDOWS : obj.WEB;
};
export function getPlatformName() {
  return android;
}
export function getNativePlatform() {
  if ("ios" !== android) {
    if ("android" !== android) {
      return "web";
    }
  }
  return android;
}
export const getOS = function getOS() {
  return "android";
};
export const getNewUpdaterPlatformName = function getNewUpdaterPlatformName() {
  const obj = /^win/;
  if (obj.test(android)) {
    return "win";
  }
};