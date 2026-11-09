// === Module 17018: AccountBlockedUsersSetting ===

// Module 17018 (AccountBlockedUsersSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1113 */;
import RelationshipStore from "RelationshipStore" /* 5082 */;

require = fn;
const SettingBuilders = fn(11685);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.PFOUKW);
  },
  useDescription: function useAccountBlockedUsersSettingDescription() {
    items = [RelationshipStore];
    const numberOfBlockedUsers = initialize.useStateFromStores(items, () => "" + blockedIDs.getBlockedIDs().length);
    const intl = util.intl;
    return intl.format(util.t["r91W/h"], { numberOfBlockedUsers });
  },
  IconComponent: fn(10005).DenyIcon,
  parent: fn(8503).MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  screen: {
    route: fn(1072).UserSettingsSections.BLOCKED_USERS_V2,
    getComponent() {
      return require("BlockedUsersListV2").default;
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountBlockedUsersSetting.tsx");

export default route;
export const AccountBlockedUsersSettingV2 = route;