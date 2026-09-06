// discord_app/modules/user_settings/privacy_and_safety/native/UserSettingsNativeBridgeManager.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import UserSettingsProtoStore from "../../UserSettingsProtoStore.tsx";
import AutomaticLifecycleManager from "../../../../lib/AutomaticLifecycleManager.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const NativeModules = _mod17.NativeModules;
let prototype = function UserSettingsNativeBridgeManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.saveExplicitContentSettingsToDisk = PlatformUtils.isIOS()
    ? () => {
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
}.prototype;
class prototype extends tmp2 {}
prototype = new prototype();
let result = size.fileFinishedImporting(
  "modules/user_settings/privacy_and_safety/native/UserSettingsNativeBridgeManager.tsx",
);

export default prototype;
