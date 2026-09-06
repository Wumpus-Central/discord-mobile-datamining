// === Module 14779: AccountConfirmPasswordSetting ===

// Module 14779 (AccountConfirmPasswordSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import UserSettingsConfirmPassword from "UserSettingsConfirmPassword" /* 6993 */;
import SettingsConstants from "SettingsConstants" /* 7975 */;
import SettingBuilders from "SettingBuilders" /* 11468 */;
import size from "module_2" /* 2 */;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["7qKDrE"]);
  },
  parent: SettingsConstants.MobileUserSettings.ACCOUNT,
  unsearchable: true,
  screen: {
    route: Constants.UserSettingsSections.ACCOUNT_CONFIRM_PASSWORD,
    getComponent() {
      return UserSettingsConfirmPassword.UserSettingsConfirmPasswordWrapped;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountConfirmPasswordSetting.tsx");

export default route;