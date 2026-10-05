// discord_app/modules/user_settings/defs/native/SwipeRightToLeftSetting.tsx
import react from "../../../../../_runtime/00576_react.js";
import Constants from "../../../../Constants.tsx";
import intl3 from "../../../../intl/index.native.tsx";
import preloaded_user_settings from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import UserSettings from "../../UserSettings.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp8;
      const obj = react;
      const cResult = obj.c(2);
      const SwipeRightToLeftModeSetting = UserSettings.SwipeRightToLeftModeSetting;
      const setting = SwipeRightToLeftModeSetting.useSetting();
      if (setting === preloaded_user_settings.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_REPLY) {
        let first;
        const _Symbol2 = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = intl3.intl;
          const stringResult = intl2.string(intl3.t["3tYNDS"]);
          cResult[0] = stringResult;
          first = stringResult;
        } else {
          first = cResult[0];
        }
        tmp8 = first;
      } else {
        tmp8 = null;
        if (setting === preloaded_user_settings.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS) {
          let tmp6;
          const _Symbol = Symbol;
          if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = intl3.intl;
            const stringResult1 = intl.string(intl3.t["6eXLcJ"]);
            cResult[1] = stringResult1;
            tmp6 = stringResult1;
          } else {
            tmp6 = cResult[1];
          }
          tmp8 = tmp6;
        }
      }
      return tmp8;
    }
  : () => {
      let stringResult;
      const SwipeRightToLeftModeSetting = UserSettings.SwipeRightToLeftModeSetting;
      const setting = SwipeRightToLeftModeSetting.useSetting();
      if (setting === preloaded_user_settings.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_REPLY) {
        const intl2 = intl3.intl;
        stringResult = intl2.string(intl3.t["3tYNDS"]);
      } else {
        stringResult = null;
        if (setting === preloaded_user_settings.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS) {
          const intl = intl3.intl;
          stringResult = intl.string(intl3.t["6eXLcJ"]);
        }
      }
      return stringResult;
    };
let obj = {
  useTitle() {
    const intl = intl3.intl;
    return intl.string(intl3.t["D/Dkcd"]);
  },
  parent: MobileUserSettings.CHAT,
  useTrailing: tmp2,
  screen: {
    route: UserSettingsSections.SWIPE_RIGHT_TO_LEFT,
    getComponent() {
      return require("SwipeRightToLeftScreen").default;
    },
  },
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SwipeRightToLeftSetting.tsx");

export default route;
