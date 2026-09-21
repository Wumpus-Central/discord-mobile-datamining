// discord_app/modules/user_settings/defs/native/AccountIgnoredUsersSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import util from "../../../../intl/index.native.tsx";
import RelationshipStore from "../../../../stores/RelationshipStore.tsx";

require = fn;
const SettingBuilders = fn(11725);
const route = SettingBuilders.createRoute({
  IconComponent: fn(7211).EyeSlashIcon,
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["93ZDWE"]);
  },
  useDescription: function useAccountIgnoredUsersSettingDescription() {
    const items = [RelationshipStore];
    const stateFromStoresArray = initialize.useStateFromStoresArray(items, () => ignoredIDs.getIgnoredIDs());
    const intl = util.intl;
    return intl.format(util.t.rXUeOl, { numberOfIgnoredUsers: stateFromStoresArray.length });
  },
  parent: fn(8233).MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  screen: {
    route: fn(1074).UserSettingsSections.IGNORED_USERS,
    getComponent() {
      return require("IgnoredUsersList").default;
    },
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountIgnoredUsersSetting.tsx");

export default route;
