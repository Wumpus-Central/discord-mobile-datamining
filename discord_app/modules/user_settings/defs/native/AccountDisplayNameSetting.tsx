// === Module 14594: route ===

// Module 14594 (route)
import initialize from "initialize" /* 586 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import closure_2 from "mergeGuildAvatar" /* 1921 */;
import createToggle from "createToggle" /* 11288 */;

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["9AjdkD"]);
  },
  parent: require("MobileUserSettings").MobileUserSettings.ACCOUNT,
  useTrailing: function useAccountDisplayNameSettingTrailing() {
    const items = [closure_2];
    return initialize.useStateFromStores(items, () => {
      currentUser = currentUser.getCurrentUser();
      let globalName;
      if (currentUser != null) {
        globalName = currentUser.globalName;
      }
      return globalName;
    });
  },
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.PROFILE_CUSTOMIZATION,
  getComponent() {
    return require(14463) /* ProfileCustomizationSubsection */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/AccountDisplayNameSetting.tsx");

export default createToggle;