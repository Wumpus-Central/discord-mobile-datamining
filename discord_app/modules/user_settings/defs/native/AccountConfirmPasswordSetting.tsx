// === Module 17316: AccountConfirmPasswordSetting ===

// Module 17316 (AccountConfirmPasswordSetting)
import Constants from "Constants" /* 1072 */;
import util from "util" /* 1113 */;
import UserSettingsConfirmPassword from "UserSettingsConfirmPassword" /* 7821 */;
import SettingsConstants from "SettingsConstants" /* 9213 */;
import SettingBuilders from "SettingBuilders" /* 12612 */;
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