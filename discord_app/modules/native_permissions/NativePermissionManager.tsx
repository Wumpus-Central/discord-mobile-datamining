// discord_app/modules/native_permissions/NativePermissionManager.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import Constants from "../../Constants.tsx";
import PlatformUtils from "../../utils/PlatformUtils.tsx";
import NativePermissionConstants from "NativePermissionConstants.tsx";
import NativePermissionUtils from "NativePermissionUtils.tsx";
import LifecycleManager from "../../lib/LifecycleManager.tsx";
import size from "../../../_runtime/metro/00002__.js";

const NativePermissionTypes = NativePermissionConstants.NativePermissionTypes;
const InputModes = Constants.InputModes;
class NativePermissionManager extends tmp2 {}
const prototype = NativePermissionManager.prototype;
prototype["isEnabled"] = function isEnabled() {
  let isDesktopResult = PlatformUtils.isDesktop();
  if (isDesktopResult) {
    isDesktopResult = tmp(1115).isMac();
    const tmpResult = tmp(1115);
  }
  if (isDesktopResult) {
    const ProcessArgs = tmp(5141).ProcessArgs;
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
