// === Module 14775: AccountChangePasswordSetting ===

// Module 14775 (AccountChangePasswordSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import SettingsConstants from "SettingsConstants" /* 7975 */;
import SettingBuilders from "SettingBuilders" /* 11468 */;
import size from "module_2" /* 2 */;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["CIGa+7"]);
  },
  parent: SettingsConstants.MobileUserSettings.ACCOUNT,
  screen: {
    route: Constants.UserSettingsSections.ACCOUNT_CHANGE_PASSWORD,
    getComponent() {
      return require("AccountEditPassword").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountChangePasswordSetting.tsx");

export default route;