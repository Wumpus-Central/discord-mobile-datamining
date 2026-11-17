// === Module 18179: ScreenDowntimeReminderSetting ===

// Module 18179 (ScreenDowntimeReminderSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1113 */;
import useUserIsTeenAgeGroupDefault from "useUserIsTeenAgeGroup" /* 17479 */;
import NotificationActionCreatorsDefault from "NotificationActionCreators" /* 18180 */;
import NotificationSettingsStore from "NotificationSettingsStore" /* 11780 */;

require = fn;
let SettingBuilders = fn(12612);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.z6tZKH);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(util.t.TummoQ);
  },
  parent: fn(9213).MobileUserSettings.NOTIFICATIONS,
  useValue() {
    items = [NotificationSettingsStore];
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
SettingBuilders = fn(12612);
const obj4 = {};
const merged = Object.assign(toggle);
obj4.parent = fn(18154).MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY;
const toggle1 = SettingBuilders.createToggle(obj4);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ScreenDowntimeReminderSetting.tsx");

export default toggle;
export const RedesignScreenDowntimeReminderSetting = toggle1;