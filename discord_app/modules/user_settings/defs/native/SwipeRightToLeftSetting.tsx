// discord_app/modules/user_settings/defs/native/SwipeRightToLeftSetting.tsx
import createToggle from "createToggle";
import { create } from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { UserSettingsSwipeRightToLeft } from "../../chat/native/SwipeRightToLeftScreen.tsx";
import { explicitContentFromProto } from "../../UserSettings.tsx";

obj = {
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t["D/Dkcd"]);
  },
  parent: require("MobileSetting").MobileSetting.CHAT,
  useTrailing: function useSwipeRightToLeftSettingTrailing() {
    const SwipeRightToLeftModeSetting = explicitContentFromProto /* explicitContentFromProto */.SwipeRightToLeftModeSetting;
    const setting = SwipeRightToLeftModeSetting.useSetting();
    if (setting === create /* create */.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_REPLY) {
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
    return UserSettingsSwipeRightToLeft /* UserSettingsSwipeRightToLeft */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("explicitContentFromProto").fileFinishedImporting("modules/user_settings/defs/native/SwipeRightToLeftSetting.tsx");

export default route;