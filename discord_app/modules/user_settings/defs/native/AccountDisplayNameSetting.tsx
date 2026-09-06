// === Module 14712: AccountDisplayNameSetting ===

// Module 14712 (AccountDisplayNameSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
fn(11468);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["9AjdkD"]);
  },
  parent: fn(7975).MobileUserSettings.ACCOUNT,
  useTrailing: function useAccountDisplayNameSettingTrailing() {
    const items = [UserStore];
    return initialize.useStateFromStores(items, () => {
      currentUser = currentUser.getCurrentUser();
      let globalName;
      if (currentUser != null) {
        globalName = currentUser.globalName;
      }
      return globalName;
    });
  },
  screen: {
    route: fn(1074).UserSettingsSections.PROFILE_CUSTOMIZATION,
    getComponent() {
      return require("ProfileCustomizationSettingScreen").default;
    }
  }
};
SettingBuilders = SettingBuilders.createRoute(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountDisplayNameSetting.tsx");

export default SettingBuilders;