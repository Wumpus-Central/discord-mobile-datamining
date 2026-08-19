// === Module 4841: isEnabled ===

// Module 4841 (isEnabled)
import obj132 from "obj132" /* 2 */;
import obj1322 from "obj132" /* 500 */;
import ME from "ME" /* 676 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import initializeDefault from "initialize" /* 4720 */;
import NativePermissionStatus from "NativePermissionStatus" /* 4839 */;
import NativePermissionsRequestOptions from "NativePermissionsRequestOptions" /* 4840 */;
import get from "get" /* 4842 */;

const NativePermissionTypes = NativePermissionStatus.NativePermissionTypes;
const InputModes = ME.InputModes;
initializeDefault;
class NativePermissionManager extends tmp2 {
}
const prototype = NativePermissionManager.prototype;
prototype["isEnabled"] = function isEnabled() {
  let isDesktopResult = obj1322.isDesktop();
  if (isDesktopResult) {
    isDesktopResult = obj1322.isMac();
    const tmpResult = obj1322;
  }
  if (isDesktopResult) {
    const ProcessArgs = get.ProcessArgs;
    isDesktopResult = !ProcessArgs.isDiscordTestSet();
  }
  return isDesktopResult;
};
prototype["_initialize"] = function _initialize() {
  if (this.isEnabled()) {
    const subscription = dispatcherDefault.subscribe("AUDIO_SET_MODE", this.handleAudioSetMode);
  }
};
prototype["_terminate"] = function _terminate() {
  if (this.isEnabled()) {
    dispatcherDefault.unsubscribe("AUDIO_SET_MODE", this.handleAudioSetMode);
  }
};
prototype["handleAudioSetMode"] = function handleAudioSetMode(mode) {
  if (mode.mode === InputModes.PUSH_TO_TALK) {
    const permission = NativePermissionsRequestOptions.default.requestPermission(NativePermissionTypes.INPUT_MONITORING);
    const _default = NativePermissionsRequestOptions.default;
  }
};
const nativePermissionManager = new NativePermissionManager();
const result = obj132.fileFinishedImporting("modules/native_permissions/NativePermissionManager.tsx");

export default nativePermissionManager;