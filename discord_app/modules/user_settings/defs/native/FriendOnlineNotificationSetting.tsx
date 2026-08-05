import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { apexExperiment } from "../../../notifications/friend_online/FriendOnlineNotificationExperiment.tsx";
// discord_app/modules/user_settings/defs/native/FriendOnlineNotificationSetting.tsx
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t["uvIi/4"]);
  },
  useDescription() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t.E6O06k);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue: require("explicitContentFromProto").EnableFriendOnlineNotifications.useSetting,
  onValueChange: require("onFriendOnlineNotificationSettingsChanged").onFriendOnlineNotificationSettingsChanged,
  usePredicate: function useExperiment() {
    return apexExperiment /* apexExperiment */.useFriendOnlineNotificationExperiment("tabsV2Settings").showSettingsToggle;
  }
});
const obj = {
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t["uvIi/4"]);
  },
  useDescription() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t.E6O06k);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue: require("explicitContentFromProto").EnableFriendOnlineNotifications.useSetting,
  onValueChange: require("onFriendOnlineNotificationSettingsChanged").onFriendOnlineNotificationSettingsChanged,
  usePredicate: function useExperiment() {
    return apexExperiment /* apexExperiment */.useFriendOnlineNotificationExperiment("tabsV2Settings").showSettingsToggle;
  }
};
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/FriendOnlineNotificationSetting.tsx");

export default toggle;