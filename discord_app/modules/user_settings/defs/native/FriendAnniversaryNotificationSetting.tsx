// discord_app/modules/user_settings/defs/native/FriendAnniversaryNotificationSetting.tsx
import set from "../../../../../_runtime/00002_set.js";
import getSystemLocale from "../../../../intl/index.native.tsx";
import explicitContentFromProto from "../../UserSettings.tsx";
import MobileUserSettings from "../../core/native/SettingsConstants.tsx";
import apexExperimentDefault from "../../../premium/gifting/native/MobileFriendAnniversaryExperiment.tsx";
import onFriendAnniversaryNotificationSettingsChanged from "../../../premium/FriendAnniversaryNotificationUtils.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.BVO96v);
  },
  parent: MobileUserSettings.MobileUserSettings.NOTIFICATIONS,
  useValue: explicitContentFromProto.EnableFriendAnniversaryNotifications.useSetting,
  useDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["00TNo7"]);
  },
  onValueChange: onFriendAnniversaryNotificationSettingsChanged.onFriendAnniversaryNotificationSettingsChanged,
  usePredicate() {
    return apexExperimentDefault.useConfig({ location: "FriendAnniversaryNotificationSetting" }).enabled;
  }
});
const obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.BVO96v);
  },
  parent: MobileUserSettings.MobileUserSettings.NOTIFICATIONS,
  useValue: explicitContentFromProto.EnableFriendAnniversaryNotifications.useSetting,
  useDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["00TNo7"]);
  },
  onValueChange: onFriendAnniversaryNotificationSettingsChanged.onFriendAnniversaryNotificationSettingsChanged,
  usePredicate() {
    return apexExperimentDefault.useConfig({ location: "FriendAnniversaryNotificationSetting" }).enabled;
  }
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/FriendAnniversaryNotificationSetting.tsx");

export default toggle;