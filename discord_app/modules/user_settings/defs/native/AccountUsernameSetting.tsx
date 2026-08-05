// discord_app/modules/user_settings/defs/native/AccountUsernameSetting.tsx
import "noop";
import mergeGuildAvatar from "mergeGuildAvatar";
import { jsx } from "jsxProd";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.IEpCBQ);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT,
  useTrailing: function useAccountUsernameSettingTrailing() {
    const items = [mergeGuildAvatar];
    return require("../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items, () => callback(table[6]).getUserTag(currentUser.getCurrentUser(), { decoration: "never" }));
  },
  useDescription: function useAccountUsernameSettingDescription() {
    let obj = require("../../../guild_automod/AutomodQuarantineUtils.tsx") /* useCurrentUserHasAutomodQuarantinedProfile */;
    const guildAutomodProfileQuarantineErrors = obj.useGuildAutomodProfileQuarantineErrors();
    let first;
    if (guildAutomodProfileQuarantineErrors != null) {
      const nick = guildAutomodProfileQuarantineErrors.nick;
      if (nick != null) {
        first = nick[0];
      }
    }
    let tmp5 = null;
    if (null != first) {
      obj = { variant: "text-xs/medium", color: "text-feedback-warning", children: null };
      obj[2] = first;
      tmp5 = jsx(require("../../../../design/components/Text/native/Text.tsx") /* Text */.Text, { variant: "text-xs/medium", color: "text-feedback-warning", children: null });
    }
    return tmp5;
  },
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.ACCOUNT_CHANGE_USERNAME,
  getComponent() {
    return require("../../account/native/UserSettingsChangeUsername.tsx") /* UsernameStatusMessage */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("MobileSetting").fileFinishedImporting("modules/user_settings/defs/native/AccountUsernameSetting.tsx");

export default createToggle;