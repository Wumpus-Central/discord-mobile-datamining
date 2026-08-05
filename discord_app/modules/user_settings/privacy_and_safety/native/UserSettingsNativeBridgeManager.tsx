// discord_app/modules/user_settings/privacy_and_safety/native/UserSettingsNativeBridgeManager.tsx
import { NativeModules } from "get ActivityIndicator";
import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed";
import "initialize";

let prototype = function UserSettingsNativeBridgeManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.saveExplicitContentSettingsToDisk = require("../../../../utils/PlatformUtils.tsx") /* set */.isIOS() ? (() => {
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
let result = require("initialize").fileFinishedImporting("modules/user_settings/privacy_and_safety/native/UserSettingsNativeBridgeManager.tsx");

export default prototype;