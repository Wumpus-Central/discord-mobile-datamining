// discord_app/modules/user_settings/privacy_and_safety/native/UserSettingsNativeBridgeManager.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import obj1322 from "../../../../utils/PlatformUtils.tsx";
import initializeDefault from "../../../../lib/AutomaticLifecycleManager.tsx";
import handleConnectionClosedOrResumed from "../../UserSettingsProtoStore.tsx";

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