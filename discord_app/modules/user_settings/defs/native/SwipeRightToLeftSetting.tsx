// === Module 15574: SwipeRightToLeftSetting ===

// Module 15574 (SwipeRightToLeftSetting)
import c from "c" /* 576 */;
import Constants from "Constants" /* 1085 */;
import util from "util" /* 1126 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1209 */;
import UserSettings from "UserSettings" /* 2040 */;
import SettingsConstants from "SettingsConstants" /* 7966 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSwipeRightToLeftSettingTrailing() {
  let stringResult = dependencyMap;
  const cResult = c.c(2);
  const SwipeRightToLeftModeSetting = UserSettings.SwipeRightToLeftModeSetting;
  const setting = SwipeRightToLeftModeSetting.useSetting();
  if (setting === preloaded_user_settings.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_REPLY) {
    const _Symbol2 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = util.intl;
      stringResult = intl2.string(util.t["3tYNDS"]);
      cResult[0] = stringResult;
      let first = stringResult;
    } else {
      first = cResult[0];
    }
  } else if (setting !== preloaded_user_settings.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS) {
    return null;
  } else {
    const _Symbol = Symbol;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = util.intl;
      const stringResult1 = intl.string(util.t["6eXLcJ"]);
      cResult[1] = stringResult1;
    }
  }
}) : (function useSwipeRightToLeftSettingTrailing() {
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
});
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["D/Dkcd"]);
  },
  parent: SettingsConstants.MobileUserSettings.CHAT,
  useTrailing: ReactCompilerGating.isReactCompilerEnabled() ? (function useSwipeRightToLeftSettingTrailing() {
    let stringResult = dependencyMap;
    const cResult = c.c(2);
    const SwipeRightToLeftModeSetting = UserSettings.SwipeRightToLeftModeSetting;
    const setting = SwipeRightToLeftModeSetting.useSetting();
    if (setting === preloaded_user_settings.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_REPLY) {
      const _Symbol2 = Symbol;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = util.intl;
        stringResult = intl2.string(util.t["3tYNDS"]);
        cResult[0] = stringResult;
        let first = stringResult;
      } else {
        first = cResult[0];
      }
    } else if (setting !== preloaded_user_settings.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS) {
      return null;
    } else {
      const _Symbol = Symbol;
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult1 = intl.string(util.t["6eXLcJ"]);
        cResult[1] = stringResult1;
      }
    }
  }) : (function useSwipeRightToLeftSettingTrailing() {
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
  }),
  screen: {
    route: Constants.UserSettingsSections.SWIPE_RIGHT_TO_LEFT,
    getComponent() {
      return require("SwipeRightToLeftScreen").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SwipeRightToLeftSetting.tsx");

export default route;