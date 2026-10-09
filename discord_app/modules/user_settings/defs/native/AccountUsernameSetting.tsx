// === Module 14899: AccountUsernameSetting ===

// Module 14899 (AccountUsernameSetting)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import UserUtilsDefault from "UserUtils" /* 4923 */;
import AutomodQuarantineUtils from "AutomodQuarantineUtils" /* 11412 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1390 */;

const Text_Text = Text(5087);
require = fn;
const jsx = fn(21).jsx;
fn(558);
const ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAccountUsernameSettingTrailing() {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function s() {
      return UserUtilsDefault.getUserTag(currentUser.getCurrentUser(), { decoration: "never" });
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return initialize.useStateFromStores(tmp4, tmp5);
}) : (function useAccountUsernameSettingTrailing() {
  const items = [UserStore];
  return initialize.useStateFromStores(items, () => UserUtilsDefault.getUserTag(currentUser.getCurrentUser(), { decoration: "never" }));
});
const SettingBuilders = fn(10629);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAccountUsernameSettingDescription() {
  let Text = require;
  let tmp = dependencyMap;
  const cResult = c.c(2);
  const guildAutomodProfileQuarantineErrors = AutomodQuarantineUtils.useGuildAutomodProfileQuarantineErrors();
  let first;
  if (guildAutomodProfileQuarantineErrors != null) {
    const nick = guildAutomodProfileQuarantineErrors.nick;
    if (nick != null) {
      first = nick[0];
    }
  }
  if (null == first) {
    return null;
  } else if (cResult[0] !== first) {
    Text = Text_Text.Text;
    const obj3 = { variant: "text-xs/medium", color: "text-feedback-warning", children: first };
    tmp = <Text variant="text-xs/medium" color="text-feedback-warning">{first}</Text>;
    cResult[0] = first;
    cResult[1] = tmp;
  }
}) : (function useAccountUsernameSettingDescription() {
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
});
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.IEpCBQ);
  },
  parent: fn(7974).MobileUserSettings.ACCOUNT,
  useTrailing: tmp3,
  useDescription: ReactCompilerGating.isReactCompilerEnabled() ? (function useAccountUsernameSettingDescription() {
    let Text = require;
    let tmp = dependencyMap;
    const cResult = c.c(2);
    const guildAutomodProfileQuarantineErrors = AutomodQuarantineUtils.useGuildAutomodProfileQuarantineErrors();
    let first;
    if (guildAutomodProfileQuarantineErrors != null) {
      const nick = guildAutomodProfileQuarantineErrors.nick;
      if (nick != null) {
        first = nick[0];
      }
    }
    if (null == first) {
      return null;
    } else if (cResult[0] !== first) {
      Text = Text_Text.Text;
      const obj3 = { variant: "text-xs/medium", color: "text-feedback-warning", children: first };
      tmp = <Text variant="text-xs/medium" color="text-feedback-warning">{first}</Text>;
      cResult[0] = first;
      cResult[1] = tmp;
    }
  }) : (function useAccountUsernameSettingDescription() {
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
  }),
  screen: {
    route: fn(1085).UserSettingsSections.ACCOUNT_CHANGE_USERNAME,
    getComponent() {
      return require("UserSettingsChangeUsername").default;
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountUsernameSetting.tsx");

export default route;