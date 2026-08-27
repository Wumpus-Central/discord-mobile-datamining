// === Module 15019: route ===

// Module 15019 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import create from "create" /* 1306 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4134 */;
import MobileUserSettings from "MobileUserSettings" /* 7816 */;
import createToggle from "createToggle" /* 10988 */;

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["D/Dkcd"]);
  },
  parent: MobileUserSettings.MobileUserSettings.CHAT,
  useTrailing: function useSwipeRightToLeftSettingTrailing() {
    const SwipeRightToLeftModeSetting = explicitContentFromProto.SwipeRightToLeftModeSetting;
    const setting = SwipeRightToLeftModeSetting.useSetting();
    if (setting === create.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_REPLY) {
      const intl2 = tmp(1236).intl;
      let stringResult = intl2.string(tmp(1236).t["3tYNDS"]);
    } else {
      stringResult = null;
      if (setting === tmp(1306).SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS) {
        const intl = tmp(1236).intl;
        stringResult = intl.string(tmp(1236).t["6eXLcJ"]);
      }
    }
    return stringResult;
  },
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.SWIPE_RIGHT_TO_LEFT,
  getComponent() {
    return require(15020) /* UserSettingsSwipeRightToLeft */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/SwipeRightToLeftSetting.tsx");

export default route;