// === Module 16448: AuthorizedAppsSetting ===

// Module 16448 (AuthorizedAppsSetting)
import Constants from "Constants" /* 1071 */;
import util from "util" /* 1112 */;
import KeyIcon from "KeyIcon" /* 7322 */;
import SettingsConstants from "SettingsConstants" /* 9555 */;
import SettingBuilders from "SettingBuilders" /* 11962 */;
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