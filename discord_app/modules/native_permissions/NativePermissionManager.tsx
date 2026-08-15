// discord_app/modules/native_permissions/NativePermissionManager.tsx
import { NativePermissionTypes } from "NativePermissionStatus";
import { InputModes } from "ME";
import "initialize";
import { dispatcher } from "../../Dispatcher.tsx";
import { set } from "../../utils/PlatformUtils.tsx";
import { NativePermissionsRequestOptions } from "NativePermissionUtils.tsx";

class NativePermissionManager extends tmp2 {
}
const prototype = NativePermissionManager.prototype;
prototype["isEnabled"] = function isEnabled() {
  let isDesktopResult = set.isDesktop();
  if (isDesktopResult) {
    isDesktopResult = tmp(500).isMac();
    const tmpResult = tmp(500);
  }
  if (isDesktopResult) {
    const ProcessArgs = tmp(4842).ProcessArgs;
    isDesktopResult = !ProcessArgs.isDiscordTestSet();
  }
  return isDesktopResult;
};
prototype["_initialize"] = function _initialize() {
  if (this.isEnabled()) {
    const subscription = dispatcher.subscribe("AUDIO_SET_MODE", this.handleAudioSetMode);
    const obj = dispatcher;
  }
};
prototype["_terminate"] = function _terminate() {
  if (this.isEnabled()) {
    dispatcher.unsubscribe("AUDIO_SET_MODE", this.handleAudioSetMode);
    const obj = dispatcher;
  }
};
prototype["handleAudioSetMode"] = function handleAudioSetMode(mode) {
  if (mode.mode === InputModes.PUSH_TO_TALK) {
    const permission = NativePermissionsRequestOptions.default.requestPermission(NativePermissionTypes.INPUT_MONITORING);
    const _default = NativePermissionsRequestOptions.default;
  }
};
const nativePermissionManager = new NativePermissionManager();
const result = require("initialize").fileFinishedImporting("modules/native_permissions/NativePermissionManager.tsx");

export default nativePermissionManager;