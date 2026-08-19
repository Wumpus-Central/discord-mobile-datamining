// === Module 14114: route ===

// Module 14114 (route)
import noopAll from "noop" /* 19 */;
import initialize from "initialize" /* 589 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4734 */;
import useCurrentUserHasAutomodQuarantinedProfile from "useCurrentUserHasAutomodQuarantinedProfile" /* 11051 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import { jsx } from "jsxProd" /* 21 */;
import createToggle from "createToggle" /* 10669 */;

require = fn;
noopAll;
{
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.IEpCBQ);
  },
  parent: require("MobileUserSettings").MobileUserSettings.ACCOUNT,
  useTrailing: function useAccountUsernameSettingTrailing() {
    const items = [closure_3];
    return initialize.useStateFromStores(items, () => callback(table[6]).getUserTag(currentUser.getCurrentUser(), { decoration: "never" }));
  },
  useDescription: function useAccountUsernameSettingDescription() {
    let obj = useCurrentUserHasAutomodQuarantinedProfile;
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
      tmp5 = jsx(Text.Text, { variant: "text-xs/medium", color: "text-feedback-warning", children: null });
    }
    return tmp5;
  },
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.ACCOUNT_CHANGE_USERNAME,
  getComponent() {
    return require(14115) /* UsernameStatusMessage */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("obj132").fileFinishedImporting("modules/user_settings/defs/native/AccountUsernameSetting.tsx");

export default createToggle;