// discord_app/modules/user_settings/defs/native/SwipeRightToLeftSetting.tsx
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["D/Dkcd"]);
  },
  parent: require("MobileSetting").MobileSetting.CHAT,
  useTrailing: function useSwipeRightToLeftSettingTrailing() {
    const SwipeRightToLeftModeSetting = require("../../UserSettings.tsx") /* explicitContentFromProto */.SwipeRightToLeftModeSetting;
    const setting = SwipeRightToLeftModeSetting.useSetting();
    if (setting === require("../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx") /* create */.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_REPLY) {
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
  route: require("ME").UserSettingsSections.SWIPE_RIGHT_TO_LEFT,
  getComponent() {
    return require("../../chat/native/SwipeRightToLeftScreen.tsx") /* UserSettingsSwipeRightToLeft */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("explicitContentFromProto").fileFinishedImporting("modules/user_settings/defs/native/SwipeRightToLeftSetting.tsx");

export default route;