// === Module 4965: isEnabled ===

// Module 4965 (isEnabled)
import set from "set" /* 2 */;
import set2 from "set" /* 500 */;
import ME from "ME" /* 676 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import initializeDefault from "initialize" /* 4562 */;
import NativePermissionStatus from "NativePermissionStatus" /* 4618 */;
import NativePermissionsRequestOptions from "NativePermissionsRequestOptions" /* 4964 */;

const NativePermissionTypes = NativePermissionStatus.NativePermissionTypes;
const InputModes = ME.InputModes;
initializeDefault;
class NativePermissionManager extends tmp2 {
}
const prototype = NativePermissionManager.prototype;
prototype["isEnabled"] = function isEnabled() {
  let isDesktopResult = set2.isDesktop();
  if (isDesktopResult) {
    isDesktopResult = tmp(500).isMac();
    const tmpResult = tmp(500);
  }
  if (isDesktopResult) {
    const ProcessArgs = tmp(4966).ProcessArgs;
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