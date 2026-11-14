// discord_app/modules/user_settings/defs/native/ScreenDowntimeReminderSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import util from "../../../../intl/index.native.tsx";
import useUserIsTeenAgeGroupDefault from "../../../parent_tools/hooks/useUserIsTeenAgeGroup.tsx";
import NotificationActionCreatorsDefault from "../../../../actions/NotificationActionCreators.tsx";
import NotificationSettingsStore from "../../../../stores/NotificationSettingsStore.tsx";

require = fn;
let SettingBuilders = fn(12406);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.z6tZKH);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(util.t.TummoQ);
  },
  parent: fn(9202).MobileUserSettings.NOTIFICATIONS,
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
  },
});
SettingBuilders = fn(12406);
const obj4 = {};
const merged = Object.assign(toggle);
obj4.parent = fn(18111).MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY;
const toggle1 = SettingBuilders.createToggle(obj4);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ScreenDowntimeReminderSetting.tsx");

export default toggle;
export const RedesignScreenDowntimeReminderSetting = toggle1;
