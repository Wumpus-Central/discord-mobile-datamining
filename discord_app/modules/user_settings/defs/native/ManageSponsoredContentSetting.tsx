// === Module 17357: ManageSponsoredContentSetting ===

// Module 17357 (ManageSponsoredContentSetting)
import Constants from "Constants" /* 1071 */;
import util from "util" /* 1112 */;
import _modDef2276 from "module_2276" /* 2276 */;
import SettingsConstants from "SettingsConstants" /* 8712 */;
import SettingBuilders from "SettingBuilders" /* 11937 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2276.yyhs9L);
  },
  parent: SettingsConstants.MobileUserSettings.SPONSORED_CONTENT_PREFERENCES,
  screen: {
    route: Constants.UserSettingsSections.MANAGE_SPONSORED_CONTENT,
    getComponent() {
      return require("ManageSponsoredContentScreen").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ManageSponsoredContentSetting.tsx");

export default route;