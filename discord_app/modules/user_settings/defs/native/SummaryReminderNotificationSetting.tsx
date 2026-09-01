// discord_app/modules/user_settings/defs/native/SummaryReminderNotificationSetting.tsx
import set from "../../../../../_runtime/00002_set.js";
import getSystemLocale from "../../../../intl/index.native.tsx";
import explicitContentFromProto from "../../UserSettings.tsx";
import MobileUserSettings from "../../core/native/SettingsConstants.tsx";
import onSummaryReminderNotificationSettingsChanged from "../../../notifications/summary_reminder/SummaryReminderNotificationUtils.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";

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
  },
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
  },
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/SummaryReminderNotificationSetting.tsx");

export default toggle;
