// === Module 15487: ReactionNotificationsSettings ===

// Module 15487 (ReactionNotificationsSettings)
import util from "util" /* 1114 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1187 */;
import UserSettings from "UserSettings" /* 1935 */;
import ReactionUtils from "ReactionUtils" /* 4211 */;
import SettingsConstants from "SettingsConstants" /* 7975 */;
import SettingBuilders from "SettingBuilders" /* 11468 */;
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
    let obj = { label: null, value: null };
    const intl = util.intl;
    obj.label = intl.string(util.t["9x/RtT"]);
    obj.value = preloaded_user_settings.ReactionNotificationType.NOTIFICATIONS_ENABLED;
    const items = [obj, , ];
    obj = { label: null, value: null };
    const intl2 = util.intl;
    obj.label = intl2.string(util.t.fJAbQd);
    obj.value = preloaded_user_settings.ReactionNotificationType.ONLY_DMS;
    items[1] = obj;
    obj = { label: null, value: null };
    const intl3 = util.intl;
    obj.label = intl3.string(util.t["xu+UDU"]);
    obj.value = preloaded_user_settings.ReactionNotificationType.NOTIFICATIONS_DISABLED;
    items[2] = obj;
    return items;
  }
});
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ReactionNotificationsSettings.tsx");

export default radio;
export { onChange };