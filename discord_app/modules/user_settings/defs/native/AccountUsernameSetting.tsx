// discord_app/modules/user_settings/defs/native/AccountUsernameSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import UserUtilsDefault from "../../../../utils/UserUtils.tsx";
import AutomodQuarantineUtils from "../../../guild_automod/AutomodQuarantineUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

const Text_Text = Text(4886);
require = fn;
const jsx = fn(21).jsx;
fn(558);
const ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function o() {
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
    }
  : () => {
      const items = [UserStore];
      return initialize.useStateFromStores(items, () =>
        UserUtilsDefault.getUserTag(currentUser.getCurrentUser(), { decoration: "never" }),
      );
    };
const SettingBuilders = fn(11129);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
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
        tmp = (
          <Text variant="text-xs/medium" color="text-feedback-warning">
            {first}
          </Text>
        );
        cResult[0] = first;
        cResult[1] = tmp;
      }
    }
  : () => {
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
    };
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.IEpCBQ);
  },
  parent: fn(7634).MobileUserSettings.ACCOUNT,
  useTrailing: tmp3,
  useDescription: ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
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
          tmp = (
            <Text variant="text-xs/medium" color="text-feedback-warning">
              {first}
            </Text>
          );
          cResult[0] = first;
          cResult[1] = tmp;
        }
      }
    : () => {
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
    route: fn(1085).UserSettingsSections.ACCOUNT_CHANGE_USERNAME,
    getComponent() {
      return require("UserSettingsChangeUsername").default;
    },
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountUsernameSetting.tsx");

export default route;
