// === Module 15585: ReactionNotificationsSettings ===

// Module 15585 (ReactionNotificationsSettings)
import util from "util" /* 1115 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1186 */;
import UserSettings from "UserSettings" /* 1936 */;
import ReactionUtils from "ReactionUtils" /* 4290 */;
import SettingsConstants from "SettingsConstants" /* 8082 */;
import SettingBuilders from "SettingBuilders" /* 11606 */;
import size from "module_2" /* 2 */;

function onChange(arg0) {
  const obj = ReactionUtils;
  const ReactionNotifications = UserSettings.ReactionNotifications;
  const result = obj.updateReactionNotificationsSetting(Number(arg0), ReactionNotifications.getSetting());
}
const radio = SettingBuilders.createRadio({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.Rq0NFs);
  },
  parent: SettingsConstants.MobileUserSettings.NOTIFICATIONS,
  useValue: UserSettings.ReactionNotifications.useSetting,
  onValueChange: onChange,
  useOptions() {
    const obj = { label: null, value: null };
    const intl = util.intl;
    obj.label = intl.string(util.t["9x/RtT"]);
    obj.value = preloaded_user_settings.ReactionNotificationType.NOTIFICATIONS_ENABLED;
    const items = [obj, , ];
    const obj2 = { label: null, value: null };
    const intl2 = util.intl;
    obj2.label = intl2.string(util.t.fJAbQd);
    obj2.value = preloaded_user_settings.ReactionNotificationType.ONLY_DMS;
    items[1] = obj2;
    const obj3 = { label: null, value: null };
    const intl3 = util.intl;
    obj3.label = intl3.string(util.t["xu+UDU"]);
    obj3.value = preloaded_user_settings.ReactionNotificationType.NOTIFICATIONS_DISABLED;
    items[2] = obj3;
    return items;
  }
});
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ReactionNotificationsSettings.tsx");

export default radio;
export { onChange };