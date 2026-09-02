// === Module 5092: isEnabled ===

// Module 5092 (isEnabled)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import dispatcherDefault from "dispatcher" /* 706 */;
import set2 from "set" /* 1234 */;
import initializeDefault from "initialize" /* 4662 */;
import NativePermissionStatus from "NativePermissionStatus" /* 4730 */;
import NativePermissionsRequestOptions from "NativePermissionsRequestOptions" /* 5091 */;

const NativePermissionTypes = NativePermissionStatus.NativePermissionTypes;
const InputModes = ME.InputModes;
initializeDefault;
class NativePermissionManager extends tmp2 {
}
const prototype = NativePermissionManager.prototype;
prototype["isEnabled"] = function isEnabled() {
  let isDesktopResult = set2.isDesktop();
  if (isDesktopResult) {
    isDesktopResult = tmp(1234).isMac();
    const tmpResult = tmp(1234);
  }
  if (isDesktopResult) {
    const ProcessArgs = tmp(5093).ProcessArgs;
    isDesktopResult = !ProcessArgs.isDiscordTestSet();
  }
  return isDesktopResult;
};
prototype["_initialize"] = function _initialize() {
  if (this.isEnabled()) {
    const subscription = dispatcherDefault.subscribe("AUDIO_SET_MODE", this.handleAudioSetMode);
    const obj = dispatcherDefault;
  }
};
prototype["_terminate"] = function _terminate() {
  if (this.isEnabled()) {
    dispatcherDefault.unsubscribe("AUDIO_SET_MODE", this.handleAudioSetMode);
    const obj = dispatcherDefault;
  }
};
prototype["handleAudioSetMode"] = function handleAudioSetMode(mode) {
  if (mode.mode === InputModes.PUSH_TO_TALK) {
    const permission = NativePermissionsRequestOptions.default.requestPermission(NativePermissionTypes.INPUT_MONITORING);
    const _default = NativePermissionsRequestOptions.default;
  }
};
const nativePermissionManager = new NativePermissionManager();
const result = set.fileFinishedImporting("modules/native_permissions/NativePermissionManager.tsx");

export default nativePermissionManager;