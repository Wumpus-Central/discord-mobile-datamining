// discord_app/modules/user_settings/defs/native/SecureFramesVerifiedDevicesSetting.tsx
import Constants from "../../../../Constants.tsx";
import util from "../../../../intl/index.native.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["5b3FNI"]);
  },
  parent: SettingsConstants.MobileUserSettings.DATA_AND_PRIVACY,
  unsearchable: true,
  screen: {
    route: Constants.UserSettingsSections.SECURE_FRAMES_VERIFIED_DEVICES,
    getComponent() {
      return require("SettingsSecureFramesVerificationsScreen").default;
    },
  },
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SecureFramesVerifiedDevicesSetting.tsx");

export default route;
