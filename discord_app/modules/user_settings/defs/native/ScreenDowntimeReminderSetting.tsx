// === Module 15514: ScreenDowntimeReminderSetting ===

// Module 15514 (ScreenDowntimeReminderSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import FamilyCenterV3Experiment from "FamilyCenterV3Experiment" /* 7594 */;
import useUserLinks from "useUserLinks" /* 8645 */;
import useUserIsTeenAgeGroupDefault from "useUserIsTeenAgeGroup" /* 14911 */;
import NotificationActionCreatorsDefault from "NotificationActionCreators" /* 15515 */;
import NotificationSettingsStore from "NotificationSettingsStore" /* 10081 */;

require = fn;
fn(11468);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.z6tZKH);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(util.t.TummoQ);
  },
  parent: fn(7975).MobileUserSettings.NOTIFICATIONS,
  useValue() {
    const items = [NotificationSettingsStore];
    return initialize.useStateFromStores(items, () => NotificationSettingsStore.screenDowntimeReminder);
  },
  onValueChange(screen_downtime_reminder) {
    return NotificationActionCreatorsDefault.setScreenDowntimeReminder(screen_downtime_reminder);
  },
  usePredicate() {
    let isFamilyCenterV3Enabled = FamilyCenterV3Experiment.useIsFamilyCenterV3Enabled({ location: "ScreenDowntimeReminderSetting" });
    const tmp2 = useUserIsTeenAgeGroupDefault();
    const hasActiveParentLinks = useUserLinks.useHasActiveParentLinks();
    if (isFamilyCenterV3Enabled) {
      isFamilyCenterV3Enabled = tmp2;
    }
    if (isFamilyCenterV3Enabled) {
      isFamilyCenterV3Enabled = hasActiveParentLinks;
    }
    return isFamilyCenterV3Enabled;
  }
};
SettingBuilders = SettingBuilders.createToggle(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ScreenDowntimeReminderSetting.tsx");

export default SettingBuilders;