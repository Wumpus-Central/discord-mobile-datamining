// discord_app/modules/user_settings/defs/native/AccountConfirmPasswordSetting.tsx
import createToggle from "createToggle";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { UserSettingsConfirmPasswordWrapped } from "../../account/native/UserSettingsConfirmPassword.tsx";

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["7qKDrE"]);
  },
  parent: require("MobileUserSettings").MobileUserSettings.ACCOUNT,
  unsearchable: true,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.ACCOUNT_CONFIRM_PASSWORD,
  getComponent() {
    return UserSettingsConfirmPasswordWrapped.UserSettingsConfirmPasswordWrapped;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/AccountConfirmPasswordSetting.tsx");

export default route;