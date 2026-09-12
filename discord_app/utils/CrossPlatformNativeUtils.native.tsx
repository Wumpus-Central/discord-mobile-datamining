// === Module 4630: CrossPlatformNativeUtils ===

// Module 4630 (CrossPlatformNativeUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/CrossPlatformNativeUtils.native.tsx");

export default {
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