// === Module 15197: AuthorizedAppSetting ===

// Module 15197 (AuthorizedAppSetting)
import Constants from "Constants" /* 1085 */;
import SettingsConstants from "SettingsConstants" /* 7992 */;
import SettingBuilders from "SettingBuilders" /* 10663 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    return "";
  },
  parent: SettingsConstants.MobileUserSettings.AUTHORIZED_APPS,
  unsearchable: true,
  screen: {
    route: Constants.UserSettingsSections.AUTHORIZED_APP,
    getComponent() {
      return require("AuthorizedAppScreen").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AuthorizedAppSetting.tsx");

export default route;