// discord_app/utils/CrossPlatformNativeUtils.native.tsx
import size from "../../_runtime/metro/00002__.js";

const obj = {
  clearNavigationHistory() {},
  flushDNSCache() {},
  flushCookies() {
    return Promise.resolve();
  },
  setApplicationBackgroundColor() {},
  setZoomFactor() {
    return false;
  },
  focus() {},
  submitLiveCrashReport() {
    return Promise.resolve();
  },
  getPidFromDesktopSource() {},
  getAudioPid() {},
  generateSessionFromPid() {
    return "";
  },
  getAppHardwareAccelerationEnabled() {
    return true;
  },
  getDiscordIsElevated() {
    return null;
  },
};
const result = size.fileFinishedImporting("utils/CrossPlatformNativeUtils.native.tsx");

export default obj;
