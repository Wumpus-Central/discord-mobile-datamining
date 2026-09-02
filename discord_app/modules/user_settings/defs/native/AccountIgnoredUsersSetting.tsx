// === Module 14636: route ===

// Module 14636 (route)
import initialize from "initialize" /* 586 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import closure_2 from "markAllUserIdListsStale" /* 4130 */;
import createToggle from "createToggle" /* 11288 */;

require = arg1;
createToggle = {
  IconComponent: require("EyeSlashIcon").EyeSlashIcon,
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["93ZDWE"]);
  },
  useDescription: function useAccountIgnoredUsersSettingDescription() {
    let obj = initialize;
    const items = [closure_2];
    const stateFromStoresArray = obj.useStateFromStoresArray(items, () => ignoredIDs.getIgnoredIDs());
    const intl = getSystemLocale.intl;
    obj = { numberOfIgnoredUsers: stateFromStoresArray.length };
    return intl.format(getSystemLocale.t.rXUeOl, obj);
  },
  parent: require("MobileUserSettings").MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.IGNORED_USERS,
  getComponent() {
    return require(14637) /* IgnoredUsersList */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/AccountIgnoredUsersSetting.tsx");

export default createToggle;