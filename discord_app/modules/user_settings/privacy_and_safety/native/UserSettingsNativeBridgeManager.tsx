// === Module 18191: UserSettingsNativeBridgeManager ===

// Module 18191 (UserSettingsNativeBridgeManager)
import _mod17 from "module_17" /* 17 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1220 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7314 */;
import size from "module_2" /* 2 */;

const NativeModules = _mod17.NativeModules;
const prototype = function UserSettingsNativeBridgeManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.saveExplicitContentSettingsToDisk = PlatformUtils.isIOS() ? (() => {
    settings = settings.settings;
    if (settings != null) {
      const textAndImages = settings.textAndImages;
      if (textAndImages != null) {
        const explicitContentSettings = textAndImages.explicitContentSettings;
      }
    }
    NSUserDefaultsBridge = NSUserDefaultsBridge.NSUserDefaultsBridge;
    if (NSUserDefaultsBridge != null) {
      const _JSON = JSON;
      const result = NSUserDefaultsBridge.setExplicitContentSettingsJSONString(JSON.stringify(explicitContentSettings));
    }
  }) : (() => {

  });
  applyArgumentsResult.actions = { POST_CONNECTION_OPEN: applyArgumentsResult.saveExplicitContentSettingsToDisk, USER_SETTINGS_PROTO_UPDATE: applyArgumentsResult.saveExplicitContentSettingsToDisk };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
const prototype1 = new prototype();
let result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/UserSettingsNativeBridgeManager.tsx");

export default prototype1;