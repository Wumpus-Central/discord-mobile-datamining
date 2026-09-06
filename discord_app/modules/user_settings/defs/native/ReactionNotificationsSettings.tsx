// discord_app/modules/user_settings/defs/native/ReactionNotificationsSettings.tsx
import util from "../../../../intl/index.native.tsx";
import preloaded_user_settings from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import UserSettings from "../../UserSettings.tsx";
import ReactionUtils from "../../../reactions/ReactionUtils.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

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
    const items = [obj, ,];
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
  },
});
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ReactionNotificationsSettings.tsx");

export default radio;
export { onChange };
