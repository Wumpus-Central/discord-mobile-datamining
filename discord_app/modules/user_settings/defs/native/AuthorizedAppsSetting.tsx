// === Module 17162: AuthorizedAppsSetting ===

// Module 17162 (AuthorizedAppsSetting)
import Constants from "Constants" /* 1072 */;
import util from "util" /* 1113 */;
import KeyIcon from "KeyIcon" /* 7196 */;
import SettingsConstants from "SettingsConstants" /* 8503 */;
import SettingBuilders from "SettingBuilders" /* 11685 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["f6kk+r"]);
  },
  parent: SettingsConstants.MobileUserSettings.CONNECTIONS,
  IconComponent: KeyIcon.KeyIcon,
  unsearchable: true,
  screen: {
    route: Constants.UserSettingsSections.AUTHORIZED_APPS,
    getComponent() {
      return require("ConnectedAppsScreen").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AuthorizedAppsSetting.tsx");

export default route;