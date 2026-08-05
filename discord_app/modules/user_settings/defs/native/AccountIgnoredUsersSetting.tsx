// discord_app/modules/user_settings/defs/native/AccountIgnoredUsersSetting.tsx
import upsertRelationship from "upsertRelationship";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  IconComponent: require("EyeSlashIcon").EyeSlashIcon,
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["93ZDWE"]);
  },
  useDescription: function useAccountIgnoredUsersSettingDescription() {
    let obj = require("../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */;
    const items = [upsertRelationship];
    const stateFromStoresArray = obj.useStateFromStoresArray(items, () => ignoredIDs.getIgnoredIDs());
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj = { numberOfIgnoredUsers: stateFromStoresArray.length };
    return intl.format(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.rXUeOl, obj);
  },
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.IGNORED_USERS,
  getComponent() {
    return require("../../content_and_social/native/IgnoredUsersList.tsx") /* IgnoredUsersList */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("ME").fileFinishedImporting("modules/user_settings/defs/native/AccountIgnoredUsersSetting.tsx");

export default createToggle;