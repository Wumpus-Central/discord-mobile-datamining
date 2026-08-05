// discord_app/modules/user_settings/defs/native/FriendAnniversaryNotificationSetting.tsx
import createToggle from "createToggle";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { apexExperiment } from "../../../premium/gifting/native/MobileFriendAnniversaryExperiment.tsx";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t.BVO96v);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue: require("explicitContentFromProto").EnableFriendAnniversaryNotifications.useSetting,
  useDescription() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t["00TNo7"]);
  },
  onValueChange: require("onFriendAnniversaryNotificationSettingsChanged").onFriendAnniversaryNotificationSettingsChanged,
  usePredicate() {
    return apexExperiment.useConfig({ location: "FriendAnniversaryNotificationSetting" }).enabled;
  }
});
const obj = {
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t.BVO96v);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue: require("explicitContentFromProto").EnableFriendAnniversaryNotifications.useSetting,
  useDescription() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t["00TNo7"]);
  },
  onValueChange: require("onFriendAnniversaryNotificationSettingsChanged").onFriendAnniversaryNotificationSettingsChanged,
  usePredicate() {
    return apexExperiment.useConfig({ location: "FriendAnniversaryNotificationSetting" }).enabled;
  }
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/FriendAnniversaryNotificationSetting.tsx");

export default toggle;