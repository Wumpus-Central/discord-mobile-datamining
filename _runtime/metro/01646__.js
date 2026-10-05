// === Module 1646: ? ===

// Module 1646
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;

const version = react.version;
const Platform = react_native.Platform;

export const isJest = function isJest() {
  return process.env.JEST_WORKER_ID;
};
export const isChromeDebugger = function isChromeDebugger() {
  return !(global.nativeCallSyncHook && !global.__REMOTEDEV__ || global.RN$Bridgeless);
};
export function isWeb() {
  return false;
}
export function isAndroid() {
  return true;
}
export function isIOS() {
  return false;
}
export function isMacOS() {
  return false;
}
export const shouldBeUseWeb = function shouldBeUseWeb() {
  let flag = process.env.JEST_WORKER_ID;
  if (!flag) {
    flag = !(global.nativeCallSyncHook && !global.__REMOTEDEV__ || global.RN$Bridgeless);
  }
  if (!flag) {
    flag = false;
  }
  return flag;
};
export const isFabric = function isFabric() {
  return global._IS_FABRIC;
};
export const isReact19 = function isReact19() {
  return version.startsWith("19.");
};
export const isWindowAvailable = function isWindowAvailable() {
  return typeof window !== "undefined";
};