// discord_app/modules/user_settings/defs/native/ReactionNotificationsSettings.tsx
import intl4 from "../../../../intl/index.native.tsx";
import preloaded_user_settings from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import UserSettings from "../../UserSettings.tsx";
import ReactionUtils from "../../../reactions/ReactionUtils.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

function onChange(arg0) {
  const updateReactionNotificationsSetting = ReactionUtils.updateReactionNotificationsSetting;
  ReactionUtils;
  const NumberResult = Number(arg0);
  const ReactionNotifications = UserSettings.ReactionNotifications;
  const result = updateReactionNotificationsSetting(NumberResult, ReactionNotifications.getSetting());
}
const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = intl4.intl;
    return intl.string(intl4.t.Rq0NFs);
  },
  parent: MobileUserSettings.NOTIFICATIONS,
  useValue: UserSettings.ReactionNotifications.useSetting,
  onValueChange: onChange,
  useOptions() {
    let intl;
    let intl2;
    let intl3;
    const obj = {
      label: intl.string(intl4.t["9x/RtT"]),
      value: preloaded_user_settings.ReactionNotificationType.NOTIFICATIONS_ENABLED,
    };
    intl = intl4.intl;
    const items = [obj, ,];
    const obj2 = {
      label: intl2.string(intl4.t.fJAbQd),
      value: preloaded_user_settings.ReactionNotificationType.ONLY_DMS,
    };
    intl2 = intl4.intl;
    items[1] = obj2;
    const obj3 = {
      label: intl3.string(intl4.t["xu+UDU"]),
      value: preloaded_user_settings.ReactionNotificationType.NOTIFICATIONS_DISABLED,
    };
    intl3 = intl4.intl;
    items[2] = obj3;
    return items;
  },
};
const radio = SettingBuilders.createRadio(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ReactionNotificationsSettings.tsx");

export default radio;
export { onChange };
