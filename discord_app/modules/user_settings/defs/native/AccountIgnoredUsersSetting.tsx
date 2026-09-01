// discord_app/modules/user_settings/defs/native/AccountIgnoredUsersSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import closure_2 from "../../../../stores/RelationshipStore.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { IgnoredUsersList } from "../../content_and_social/native/IgnoredUsersList.tsx";

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
  screen: createToggle,
};
createToggle = {
  route: require("ME").UserSettingsSections.IGNORED_USERS,
  getComponent() {
    return IgnoredUsersList /* IgnoredUsersList */.default;
  },
};
createToggle = createToggle.createRoute(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/AccountIgnoredUsersSetting.tsx");

export default createToggle;
