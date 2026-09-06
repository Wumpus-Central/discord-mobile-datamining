// === Module 5140: NativePermissionManager ===

// Module 5140 (NativePermissionManager)
import DispatcherDefault from "Dispatcher" /* 573 */;
import Constants from "Constants" /* 1074 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import NativePermissionConstants from "NativePermissionConstants" /* 4770 */;
import NativePermissionUtils from "NativePermissionUtils" /* 5139 */;
import ProcessArgs2 from "ProcessArgs" /* 5141 */;
import LifecycleManager from "LifecycleManager" /* 1898 */;
import size from "module_2" /* 2 */;

const NativePermissionTypes = NativePermissionConstants.NativePermissionTypes;
const InputModes = Constants.InputModes;
class NativePermissionManager extends tmp2 {
}
const prototype = NativePermissionManager.prototype;
prototype["isEnabled"] = function isEnabled() {
  let isDesktopResult = PlatformUtils.isDesktop();
  if (isDesktopResult) {
    isDesktopResult = PlatformUtils.isMac();
    const tmpResult = PlatformUtils;
  }
  if (isDesktopResult) {
    const ProcessArgs = ProcessArgs2.ProcessArgs;
    isDesktopResult = !ProcessArgs.isDiscordTestSet();
  }
  return isDesktopResult;
};
prototype["_initialize"] = function _initialize() {
  if (this.isEnabled()) {
    const subscription = DispatcherDefault.subscribe("AUDIO_SET_MODE", this.handleAudioSetMode);
  }
};
prototype["_terminate"] = function _terminate() {
  if (this.isEnabled()) {
    DispatcherDefault.unsubscribe("AUDIO_SET_MODE", this.handleAudioSetMode);
  }
};
prototype["handleAudioSetMode"] = function handleAudioSetMode(mode) {
  if (mode.mode === InputModes.PUSH_TO_TALK) {
    const permission = NativePermissionUtils.default.requestPermission(NativePermissionTypes.INPUT_MONITORING);
    const _default = NativePermissionUtils.default;
  }
};
const nativePermissionManager = new NativePermissionManager();
const result = size.fileFinishedImporting("modules/native_permissions/NativePermissionManager.tsx");

export default nativePermissionManager;