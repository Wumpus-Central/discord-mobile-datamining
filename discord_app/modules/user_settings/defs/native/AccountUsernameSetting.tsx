// === Module 14825: AccountUsernameSetting ===

// Module 14825 (AccountUsernameSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1115 */;
import UserUtilsDefault from "UserUtils" /* 4484 */;
import Text_Text from "Text/Text" /* 4636 */;
import AutomodQuarantineUtils from "AutomodQuarantineUtils" /* 12023 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const jsx = fn(21).jsx;
const SettingBuilders = fn(11622);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.IEpCBQ);
  },
  parent: fn(8111).MobileUserSettings.ACCOUNT,
  useTrailing: function useAccountUsernameSettingTrailing() {
    const items = [UserStore];
    return initialize.useStateFromStores(items, () => UserUtilsDefault.getUserTag(currentUser.getCurrentUser(), { decoration: "never" }));
  },
  useDescription: function useAccountUsernameSettingDescription() {
    const guildAutomodProfileQuarantineErrors = AutomodQuarantineUtils.useGuildAutomodProfileQuarantineErrors();
    let first;
    if (guildAutomodProfileQuarantineErrors != null) {
      const nick = guildAutomodProfileQuarantineErrors.nick;
      if (nick != null) {
        first = nick[0];
      }
    }
    let tmp5 = null;
    if (null != first) {
      const obj2 = { variant: "text-xs/medium", color: "text-feedback-warning", children: first };
      tmp5 = jsx(Text_Text.Text, { variant: "text-xs/medium", color: "text-feedback-warning", children: first });
    }
    return tmp5;
  },
  screen: {
    route: fn(1074).UserSettingsSections.ACCOUNT_CHANGE_USERNAME,
    getComponent() {
      return require("UserSettingsChangeUsername").default;
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountUsernameSetting.tsx");

export default route;