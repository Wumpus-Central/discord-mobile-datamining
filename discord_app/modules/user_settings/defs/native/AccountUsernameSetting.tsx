// discord_app/modules/user_settings/defs/native/AccountUsernameSetting.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import get_initialized from "../../../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../../../_runtime/00576_react.js";
import Constants from "../../../../Constants.tsx";
import intl2 from "../../../../intl/index.native.tsx";
import UserUtilsDefault from "../../../../utils/UserUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import AutomodQuarantineUtils from "../../../guild_automod/AutomodQuarantineUtils.tsx";
import react from "../../../../../_runtime/00019_react.js";
import UserStore from "../../../../stores/UserStore.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let currentUser;
      let tmp4;
      let tmp5;
      let obj = react2;
      const cResult = obj.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function o() {
          const obj = UserUtilsDefault;
          return obj.getUserTag(currentUser.getCurrentUser(), { decoration: "never" });
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = get_initialized;
      return tmpResult.useStateFromStores(tmp4, tmp5);
    }
  : () => {
      let currentUser;
      let obj = get_initialized;
      const items = [UserStore];
      return obj.useStateFromStores(items, () => {
        const obj = UserUtilsDefault;
        return obj.getUserTag(currentUser.getCurrentUser(), { decoration: "never" });
      });
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const obj = react2;
      const cResult = obj.c(2);
      const obj2 = AutomodQuarantineUtils;
      const guildAutomodProfileQuarantineErrors = obj2.useGuildAutomodProfileQuarantineErrors();
      let first;
      if (guildAutomodProfileQuarantineErrors != null) {
        const nick = guildAutomodProfileQuarantineErrors.nick;
        if (nick != null) {
          first = nick[0];
        }
      }
      let tmp6 = null;
      if (null != first) {
        let tmp7;
        if (cResult[0] !== first) {
          const tmp9 = jsx(Text_Text.Text, {
            variant: "text-xs/medium",
            color: "text-feedback-warning",
            children: first,
          });
          cResult[0] = first;
          cResult[1] = tmp9;
          tmp7 = tmp9;
        } else {
          tmp7 = cResult[1];
        }
        tmp6 = tmp7;
      }
      return tmp6;
    }
  : () => {
      const obj = AutomodQuarantineUtils;
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
        tmp5 = jsx(Text_Text.Text, { variant: "text-xs/medium", color: "text-feedback-warning", children: first });
      }
      return tmp5;
    };
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.IEpCBQ);
  },
  parent: MobileUserSettings.ACCOUNT,
  useTrailing: tmp3,
  useDescription: tmp4,
  screen: {
    route: UserSettingsSections.ACCOUNT_CHANGE_USERNAME,
    getComponent() {
      return require("UserSettingsChangeUsername").default;
    },
  },
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountUsernameSetting.tsx");

export default route;
