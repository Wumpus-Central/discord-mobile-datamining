// === Module 15886: AccountDisplayNameSetting ===

// Module 15886 (AccountDisplayNameSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1112 */;
import UserStore from "UserStore" /* 1386 */;

require = fn;
const SettingBuilders = fn(11817);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["9AjdkD"]);
  },
  parent: fn(8592).MobileUserSettings.ACCOUNT,
  useTrailing: function useAccountDisplayNameSettingTrailing() {
    items = [UserStore];
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
    route: fn(1071).UserSettingsSections.PROFILE_CUSTOMIZATION,
    getComponent() {
      return require("ProfileCustomizationSettingScreen").default;
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountDisplayNameSetting.tsx");

export default route;