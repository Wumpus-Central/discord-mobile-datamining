// === Module 15020: AuthorizedAppPermissionsSetting ===

// Module 15020 (AuthorizedAppPermissionsSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import SettingsConstants from "SettingsConstants" /* 8027 */;
import SettingBuilders from "SettingBuilders" /* 11540 */;
import size from "module_2" /* 2 */;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.xrmhRX);
  },
  parent: SettingsConstants.MobileUserSettings.AUTHORIZED_APP,
  unsearchable: true,
  screen: {
    route: Constants.UserSettingsSections.AUTHORIZED_APP_PERMISSIONS,
    getComponent() {
      return require("AuthorizedAppPermissionsScreen").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AuthorizedAppPermissionsSetting.tsx");

export default route;