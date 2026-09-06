// === Module 14807: AccountIgnoredUsersSetting ===

// Module 14807 (AccountIgnoredUsersSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;

require = fn;
fn(11468);
let SettingBuilders = {
  IconComponent: fn(6968).EyeSlashIcon,
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["93ZDWE"]);
  },
  useDescription: function useAccountIgnoredUsersSettingDescription() {
    let obj = initialize;
    const items = [RelationshipStore];
    const stateFromStoresArray = obj.useStateFromStoresArray(items, () => ignoredIDs.getIgnoredIDs());
    const intl = util.intl;
    obj = { numberOfIgnoredUsers: stateFromStoresArray.length };
    return intl.format(util.t.rXUeOl, obj);
  },
  parent: fn(7975).MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  screen: {
    route: fn(1074).UserSettingsSections.IGNORED_USERS,
    getComponent() {
      return require("IgnoredUsersList").default;
    }
  }
};
SettingBuilders = SettingBuilders.createRoute(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountIgnoredUsersSetting.tsx");

export default SettingBuilders;