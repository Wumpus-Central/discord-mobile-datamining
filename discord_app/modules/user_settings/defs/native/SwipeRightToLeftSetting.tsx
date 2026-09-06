// discord_app/modules/user_settings/defs/native/SwipeRightToLeftSetting.tsx
import Constants from "../../../../Constants.tsx";
import util from "../../../../intl/index.native.tsx";
import preloaded_user_settings from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import UserSettings from "../../UserSettings.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["D/Dkcd"]);
  },
  parent: SettingsConstants.MobileUserSettings.CHAT,
  useTrailing: function useSwipeRightToLeftSettingTrailing() {
    const SwipeRightToLeftModeSetting = UserSettings.SwipeRightToLeftModeSetting;
    const setting = SwipeRightToLeftModeSetting.useSetting();
    if (setting === preloaded_user_settings.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_REPLY) {
      const intl2 = util.intl;
      let stringResult = intl2.string(util.t["3tYNDS"]);
    } else {
      stringResult = null;
      if (setting === preloaded_user_settings.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS) {
        const intl = util.intl;
        stringResult = intl.string(util.t["6eXLcJ"]);
      }
    }
    return stringResult;
  },
  screen: {
    route: Constants.UserSettingsSections.SWIPE_RIGHT_TO_LEFT,
    getComponent() {
      return require("SwipeRightToLeftScreen").default;
    },
  },
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SwipeRightToLeftSetting.tsx");

export default route;
