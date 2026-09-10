// === Module 15596: ScreenDowntimeReminderSetting ===

// Module 15596 (ScreenDowntimeReminderSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import FamilyCenterV3Experiment from "FamilyCenterV3Experiment" /* 7645 */;
import useUserLinks from "useUserLinks" /* 8715 */;
import useUserIsTeenAgeGroupDefault from "useUserIsTeenAgeGroup" /* 14989 */;
import NotificationActionCreatorsDefault from "NotificationActionCreators" /* 15597 */;
import NotificationSettingsStore from "NotificationSettingsStore" /* 10151 */;

require = fn;
fn(11540);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.z6tZKH);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(util.t.TummoQ);
  },
  parent: fn(8027).MobileUserSettings.NOTIFICATIONS,
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