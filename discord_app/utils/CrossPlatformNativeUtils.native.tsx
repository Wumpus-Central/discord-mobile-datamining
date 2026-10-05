// === Module 4884: CrossPlatformNativeUtils ===

// Module 4884 (CrossPlatformNativeUtils)
import size from "module_2" /* 2 */;

const obj = {
  clearNavigationHistory() {

  },
  flushDNSCache() {

  },
  flushCookies() {
    return Promise.resolve();
  },
  setApplicationBackgroundColor() {

  },
  setZoomFactor() {
    return false;
  },
  focus() {

  },
  submitLiveCrashReport() {
    return Promise.resolve();
  },
  getPidFromDesktopSource() {

  },
  getAudioPid() {

  },
  generateSessionFromPid() {
    return "";
  },
  getAppHardwareAccelerationEnabled() {
    return true;
  },
  getDiscordIsElevated() {
    return null;
  }
};
const result = size.fileFinishedImporting("utils/CrossPlatformNativeUtils.native.tsx");

export default obj;