// === Module 15983: AccountIgnoredUsersSetting ===

// Module 15983 (AccountIgnoredUsersSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1112 */;
import RelationshipStore from "RelationshipStore" /* 4736 */;

require = fn;
const SettingBuilders = fn(11817);
const route = SettingBuilders.createRoute({
  IconComponent: fn(7115).EyeSlashIcon,
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["93ZDWE"]);
  },
  useDescription: function useAccountIgnoredUsersSettingDescription() {
    items = [RelationshipStore];
    const stateFromStoresArray = initialize.useStateFromStoresArray(items, () => ignoredIDs.getIgnoredIDs());
    const intl = util.intl;
    return intl.format(util.t.rXUeOl, { numberOfIgnoredUsers: stateFromStoresArray.length });
  },
  parent: fn(8592).MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  screen: {
    route: fn(1071).UserSettingsSections.IGNORED_USERS,
    getComponent() {
      return require("IgnoredUsersList").default;
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountIgnoredUsersSetting.tsx");

export default route;