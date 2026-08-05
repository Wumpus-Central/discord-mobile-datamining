// discord_app/modules/user_settings/defs/native/SecureFramesVerifiedDevicesSetting.tsx
import createToggle from "createToggle";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { VerificationListItem } from "../../privacy_and_safety/native/SettingsSecureFramesVerificationsScreen.tsx";

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["5b3FNI"]);
  },
  parent: require("MobileSetting").MobileSetting.DATA_AND_PRIVACY,
  unsearchable: true,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.SECURE_FRAMES_VERIFIED_DEVICES,
  getComponent() {
    return VerificationListItem.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/SecureFramesVerifiedDevicesSetting.tsx");

export default route;