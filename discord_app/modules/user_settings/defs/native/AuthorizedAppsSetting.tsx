// === Module 14992: AuthorizedAppsSetting ===

// Module 14992 (AuthorizedAppsSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import KeyIcon from "KeyIcon" /* 7029 */;
import SettingBuilders from "SettingBuilders" /* 11562 */;
import size from "module_2" /* 2 */;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["f6kk+r"]);
  },
  parent: null,
  IconComponent: KeyIcon.KeyIcon,
  screen: {
    route: Constants.UserSettingsSections.AUTHORIZED_APPS,
    getComponent() {
      return require("UserSettingsAuthedApps").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AuthorizedAppsSetting.tsx");

export default route;