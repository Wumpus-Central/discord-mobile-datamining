// === Module 14355: route ===

// Module 14355 (route)
import initialize from "initialize" /* 589 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import closure_2 from "markAllUserIdListsStale" /* 4098 */;
import createToggle from "createToggle" /* 10988 */;

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.PFOUKW);
  },
  useDescription: function useAccountBlockedUsersSettingDescription() {
    const items = [closure_2];
    const numberOfBlockedUsers = initialize.useStateFromStores(items, () => "" + blockedIDs.getBlockedIDs().length);
    const intl = getSystemLocale.intl;
    return intl.format(getSystemLocale.t["r91W/h"], { numberOfBlockedUsers });
  },
  IconComponent: require("DenyIcon").DenyIcon,
  parent: require("MobileUserSettings").MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.BLOCKED_USERS_V2,
  getComponent() {
    return require(14356) /* BlockedUsersList */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/AccountBlockedUsersSetting.tsx");

export default createToggle;
export const AccountBlockedUsersSettingV2 = createToggle;