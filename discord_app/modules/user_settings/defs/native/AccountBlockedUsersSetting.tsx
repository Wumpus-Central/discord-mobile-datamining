// discord_app/modules/user_settings/defs/native/AccountBlockedUsersSetting.tsx
import upsertRelationship from "upsertRelationship";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.PFOUKW);
  },
  useDescription: function useAccountBlockedUsersSettingDescription() {
    const items = [upsertRelationship];
    const numberOfBlockedUsers = require("../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items, () => "" + blockedIDs.getBlockedIDs().length);
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.format(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["r91W/h"], { numberOfBlockedUsers });
  },
  IconComponent: require("DenyIcon").DenyIcon,
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.BLOCKED_USERS_V2,
  getComponent() {
    return require("../../content_and_social/native/BlockedUsersListV2.tsx") /* BlockedUsersList */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("ME").fileFinishedImporting("modules/user_settings/defs/native/AccountBlockedUsersSetting.tsx");

export default createToggle;
export const AccountBlockedUsersSettingV2 = createToggle;