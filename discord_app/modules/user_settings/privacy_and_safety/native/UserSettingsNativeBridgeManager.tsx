// === Module 17044: prototype ===

// Module 17044 (prototype)
import obj132 from "obj132" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import obj1322 from "obj132" /* 500 */;
import initializeDefault from "initialize" /* 5038 */;
import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed" /* 1340 */;

const NativeModules = get_ActivityIndicator.NativeModules;
initializeDefault;
let prototype = function UserSettingsNativeBridgeManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.saveExplicitContentSettingsToDisk = obj1322.isIOS() ? (() => {
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
prototype = new prototype();
let result = obj132.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/UserSettingsNativeBridgeManager.tsx");

export default prototype;