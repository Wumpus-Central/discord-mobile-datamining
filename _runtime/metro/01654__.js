// === Module 1654: ? ===

// Module 1654
import _mod17 from "module_17" /* 17 */;
import _mod19 from "module_19" /* 19 */;

const version = _mod19.version;
const Platform = _mod17.Platform;

export function isJest() {
  return process.env.JEST_WORKER_ID;
}
export function isChromeDebugger() {
  return !(global.nativeCallSyncHook && !global.__REMOTEDEV__ || global.RN$Bridgeless);
}
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
export function shouldBeUseWeb() {
  let flag = process.env.JEST_WORKER_ID;
  if (!flag) {
    flag = !(global.nativeCallSyncHook && !global.__REMOTEDEV__ || global.RN$Bridgeless);
    const tmp2 = global.nativeCallSyncHook && !global.__REMOTEDEV__ || global.RN$Bridgeless;
  }
  if (!flag) {
    flag = false;
  }
  return flag;
}
export function isFabric() {
  return global._IS_FABRIC;
}
export function isReact19() {
  return version.startsWith("19.");
}
export function isWindowAvailable() {
  return typeof window !== "undefined";
}