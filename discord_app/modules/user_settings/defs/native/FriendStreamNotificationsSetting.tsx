// discord_app/modules/user_settings/defs/native/FriendStreamNotificationsSetting.tsx
import createToggle from "createToggle";
import { getSystemLocale } from "../../../../intl/index.native.tsx";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.FEFn90);
  },
  parent: require("MobileUserSettings").MobileUserSettings.NOTIFICATIONS,
  useValue: require("explicitContentFromProto").StreamNotificationsEnabled.useSetting,
  onValueChange: require("onGoLiveNotificationSettingsChanged").onGoLiveNotificationSettingsChanged
});
const obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.FEFn90);
  },
  parent: require("MobileUserSettings").MobileUserSettings.NOTIFICATIONS,
  useValue: require("explicitContentFromProto").StreamNotificationsEnabled.useSetting,
  onValueChange: require("onGoLiveNotificationSettingsChanged").onGoLiveNotificationSettingsChanged
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/FriendStreamNotificationsSetting.tsx");

export default toggle;