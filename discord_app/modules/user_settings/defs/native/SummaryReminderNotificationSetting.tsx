// discord_app/modules/user_settings/defs/native/SummaryReminderNotificationSetting.tsx
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4066 */;
import MobileUserSettings from "MobileUserSettings" /* 8198 */;
import onSummaryReminderNotificationSettingsChanged from "onSummaryReminderNotificationSettingsChanged" /* 14823 */;
import createToggle from "createToggle" /* 10669 */;

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.xEqC6q);
  },
  useDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.KmVXll);
  },
  parent: MobileUserSettings.MobileUserSettings.NOTIFICATIONS,
  useValue: explicitContentFromProto.EnableSummaryReminderNotifications.useSetting,
  onValueChange: onSummaryReminderNotificationSettingsChanged.onSummaryReminderNotificationSettingsChanged,
  usePredicate() {
    return false;
  }
});
const obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.xEqC6q);
  },
  useDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.KmVXll);
  },
  parent: MobileUserSettings.MobileUserSettings.NOTIFICATIONS,
  useValue: explicitContentFromProto.EnableSummaryReminderNotifications.useSetting,
  onValueChange: onSummaryReminderNotificationSettingsChanged.onSummaryReminderNotificationSettingsChanged,
  usePredicate() {
    return false;
  }
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/SummaryReminderNotificationSetting.tsx");

export default toggle;