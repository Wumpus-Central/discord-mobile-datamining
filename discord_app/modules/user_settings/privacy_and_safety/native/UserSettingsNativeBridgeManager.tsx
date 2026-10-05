// discord_app/modules/user_settings/privacy_and_safety/native/UserSettingsNativeBridgeManager.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import UserSettingsProtoStore from "../../UserSettingsProtoStore.tsx";
import AutomaticLifecycleManager from "../../../../lib/AutomaticLifecycleManager.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let NSUserDefaultsBridge, settings;

const NativeModules = react_native.NativeModules;
class UserSettingsNativeBridgeManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    const obj = PlatformUtils;
    applyArgumentsResult.saveExplicitContentSettingsToDisk = obj.isIOS()
      ? () => {
          let explicitContentSettings;
          settings = settings.settings;
          if (settings != null) {
            const textAndImages = settings.textAndImages;
            if (textAndImages != null) {
              explicitContentSettings = textAndImages.explicitContentSettings;
            }
          }
          NSUserDefaultsBridge = NSUserDefaultsBridge.NSUserDefaultsBridge;
          if (NSUserDefaultsBridge != null) {
            const _JSON = JSON;
            const result = NSUserDefaultsBridge.setExplicitContentSettingsJSONString(
              JSON.stringify(explicitContentSettings),
            );
          }
        }
      : () => {};
    applyArgumentsResult.actions = {
      POST_CONNECTION_OPEN: applyArgumentsResult.saveExplicitContentSettingsToDisk,
      USER_SETTINGS_PROTO_UPDATE: applyArgumentsResult.saveExplicitContentSettingsToDisk,
    };
    return applyArgumentsResult;
  }
}
const userSettingsNativeBridgeManager = new UserSettingsNativeBridgeManager();
let result = size.fileFinishedImporting(
  "modules/user_settings/privacy_and_safety/native/UserSettingsNativeBridgeManager.tsx",
);

export default userSettingsNativeBridgeManager;
