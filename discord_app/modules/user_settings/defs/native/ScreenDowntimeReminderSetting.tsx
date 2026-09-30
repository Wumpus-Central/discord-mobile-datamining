// === Module 15275: ScreenDowntimeReminderSetting ===

// Module 15275 (ScreenDowntimeReminderSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1115 */;
import useUserIsTeenAgeGroupDefault from "useUserIsTeenAgeGroup" /* 14653 */;
import NotificationActionCreatorsDefault from "NotificationActionCreators" /* 15276 */;
import NotificationSettingsStore from "NotificationSettingsStore" /* 9742 */;

require = fn;
const SettingBuilders = fn(11211);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.z6tZKH);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(util.t.TummoQ);
  },
  parent: fn(7612).MobileUserSettings.NOTIFICATIONS,
  useValue() {
    const items = [NotificationSettingsStore];
    return initialize.useStateFromStores(items, () => NotificationSettingsStore.screenDowntimeReminder);
  },
  onValueChange(screen_downtime_reminder) {
    return NotificationActionCreatorsDefault.setScreenDowntimeReminder(screen_downtime_reminder);
  },
  usePredicate() {
    let hasActiveParentLinks = useUserIsTeenAgeGroupDefault();
    if (hasActiveParentLinks) {
      hasActiveParentLinks = obj.useHasActiveParentLinks();
    }
    return hasActiveParentLinks;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ScreenDowntimeReminderSetting.tsx");

export default toggle;