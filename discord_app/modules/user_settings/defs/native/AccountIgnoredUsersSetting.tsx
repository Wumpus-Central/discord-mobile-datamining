// discord_app/modules/user_settings/defs/native/AccountIgnoredUsersSetting.tsx
import upsertRelationship from "upsertRelationship";
import createToggle from "createToggle";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { IgnoredUsersList } from "../../content_and_social/native/IgnoredUsersList.tsx";

const require = arg1;
createToggle = {
  IconComponent: require("EyeSlashIcon").EyeSlashIcon,
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t["93ZDWE"]);
  },
  useDescription: function useAccountIgnoredUsersSettingDescription() {
    let obj = initialize /* initialize */;
    const items = [upsertRelationship];
    const stateFromStoresArray = obj.useStateFromStoresArray(items, () => ignoredIDs.getIgnoredIDs());
    const intl = getSystemLocale /* getSystemLocale */.intl;
    obj = { numberOfIgnoredUsers: stateFromStoresArray.length };
    return intl.format(getSystemLocale /* getSystemLocale */.t.rXUeOl, obj);
  },
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.IGNORED_USERS,
  getComponent() {
    return IgnoredUsersList /* IgnoredUsersList */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("ME").fileFinishedImporting("modules/user_settings/defs/native/AccountIgnoredUsersSetting.tsx");

export default createToggle;