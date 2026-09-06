// === Module 14800: AccountBlockedUsersSetting ===

// Module 14800 (AccountBlockedUsersSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;

require = fn;
fn(11468);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.PFOUKW);
  },
  useDescription: function useAccountBlockedUsersSettingDescription() {
    const items = [RelationshipStore];
    const numberOfBlockedUsers = initialize.useStateFromStores(items, () => "" + blockedIDs.getBlockedIDs().length);
    const intl = util.intl;
    return intl.format(util.t["r91W/h"], { numberOfBlockedUsers });
  },
  IconComponent: fn(7929).DenyIcon,
  parent: fn(7975).MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  screen: {
    route: fn(1074).UserSettingsSections.BLOCKED_USERS_V2,
    getComponent() {
      return require("BlockedUsersListV2").default;
    }
  }
};
SettingBuilders = SettingBuilders.createRoute(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountBlockedUsersSetting.tsx");

export default SettingBuilders;
export const AccountBlockedUsersSettingV2 = SettingBuilders;