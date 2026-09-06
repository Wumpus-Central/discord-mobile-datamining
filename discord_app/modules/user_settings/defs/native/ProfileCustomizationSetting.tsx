// === Module 14585: ProfileCustomizationSetting ===

// Module 14585 (ProfileCustomizationSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import SettingBuilders from "SettingBuilders" /* 11468 */;
import size from "module_2" /* 2 */;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.LYju5J);
  },
  parent: null,
  unsearchable: true,
  screen: {
    route: Constants.UserSettingsSections.PROFILE_CUSTOMIZATION,
    getComponent() {
      return require("ProfileCustomizationSettingScreen").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ProfileCustomizationSetting.tsx");

export default route;