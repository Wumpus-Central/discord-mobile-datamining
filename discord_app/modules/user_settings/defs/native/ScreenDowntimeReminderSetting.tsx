// discord_app/modules/user_settings/defs/native/ScreenDowntimeReminderSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import util from "../../../../intl/index.native.tsx";
import FamilyCenterV3Experiment from "../../../parent_tools/FamilyCenterV3Experiment.tsx";
import useUserLinks from "../../../parent_tools/hooks/useUserLinks.tsx";
import useUserIsTeenAgeGroupDefault from "../../../parent_tools/hooks/useUserIsTeenAgeGroup.tsx";
import NotificationActionCreatorsDefault from "../../../../actions/NotificationActionCreators.tsx";
import NotificationSettingsStore from "../../../../stores/NotificationSettingsStore.tsx";

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
    let isFamilyCenterV3Enabled = FamilyCenterV3Experiment.useIsFamilyCenterV3Enabled({
      location: "ScreenDowntimeReminderSetting",
    });
    const tmp2 = useUserIsTeenAgeGroupDefault();
    const hasActiveParentLinks = useUserLinks.useHasActiveParentLinks();
    if (isFamilyCenterV3Enabled) {
      isFamilyCenterV3Enabled = tmp2;
    }
    if (isFamilyCenterV3Enabled) {
      isFamilyCenterV3Enabled = hasActiveParentLinks;
    }
    return isFamilyCenterV3Enabled;
  },
};
SettingBuilders = SettingBuilders.createToggle(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ScreenDowntimeReminderSetting.tsx");

export default SettingBuilders;
