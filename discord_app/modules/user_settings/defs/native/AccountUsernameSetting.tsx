// discord_app/modules/user_settings/defs/native/AccountUsernameSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import util from "../../../../intl/index.native.tsx";
import UserUtilsDefault from "../../../../utils/UserUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import AutomodQuarantineUtils from "../../../guild_automod/AutomodQuarantineUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
const jsx = fn(21).jsx;
fn(11468);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.IEpCBQ);
  },
  parent: fn(7975).MobileUserSettings.ACCOUNT,
  useTrailing: function useAccountUsernameSettingTrailing() {
    const items = [UserStore];
    return initialize.useStateFromStores(items, () =>
      UserUtilsDefault.getUserTag(currentUser.getCurrentUser(), { decoration: "never" }),
    );
  },
  useDescription: function useAccountUsernameSettingDescription() {
    let obj = AutomodQuarantineUtils;
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
      obj = { variant: "text-xs/medium", color: "text-feedback-warning", children: first };
      tmp5 = jsx(Text_Text.Text, { variant: "text-xs/medium", color: "text-feedback-warning", children: first });
    }
    return tmp5;
  },
  screen: {
    route: fn(1074).UserSettingsSections.ACCOUNT_CHANGE_USERNAME,
    getComponent() {
      return require("UserSettingsChangeUsername").default;
    },
  },
};
SettingBuilders = SettingBuilders.createRoute(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountUsernameSetting.tsx");

export default SettingBuilders;
