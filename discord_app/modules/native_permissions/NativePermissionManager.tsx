// === Module 7276: NativePermissionManager ===

// Module 7276 (NativePermissionManager)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import NativePermissionConstants from "NativePermissionConstants" /* 5099 */;
import ProcessArgs2 from "ProcessArgs" /* 6714 */;
import NativePermissionUtils from "NativePermissionUtils" /* 7275 */;
import LifecycleManager from "LifecycleManager" /* 1989 */;
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