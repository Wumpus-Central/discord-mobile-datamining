// === Module 14296: route ===

// Module 14296 (route)
import noopAll from "noop" /* 19 */;
import initialize from "initialize" /* 589 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4442 */;
import useCurrentUserHasAutomodQuarantinedProfile from "useCurrentUserHasAutomodQuarantinedProfile" /* 11377 */;
import closure_3 from "mergeGuildAvatar" /* 1923 */;
import { jsx } from "jsxProd" /* 21 */;
import createToggle from "createToggle" /* 11006 */;

require = arg1;
noopAll;
createToggle = {
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
    return require(14297) /* UsernameStatusMessage */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/AccountUsernameSetting.tsx");

export default createToggle;