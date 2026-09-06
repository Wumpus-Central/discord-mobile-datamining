// discord_app/modules/user_settings/defs/native/AndroidMessageNotificationsSetting.tsx
import util from "../../../../intl/index.native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import AndroidNotificationSettingsStore from "../../notifications/native/stores/AndroidNotificationSettingsStore.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

function useAndroidMessageNotificationsSettingValue() {
  let flag = React2();
  if (flag == null) {
    flag = false;
  }
  return flag;
}
function useHasAndroidMessageNotificationsSetting() {
  const tmp = React2();
  let isAndroidResult = PlatformUtils.isAndroid();
  if (isAndroidResult) {
    isAndroidResult = null != tmp;
  }
  return isAndroidResult;
}
({ useAndroidMessageNotificationsEnabled: c2, setAndroidMessageNotificationsEnabled } =
  AndroidNotificationSettingsStore);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["zViLy+"]);
  },
  parent: SettingsConstants.MobileUserSettings.NOTIFICATIONS,
  useValue: useAndroidMessageNotificationsSettingValue,
  onValueChange: setAndroidMessageNotificationsEnabled,
  usePredicate: useHasAndroidMessageNotificationsSetting,
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AndroidMessageNotificationsSetting.tsx");

export default toggle;
export { useAndroidMessageNotificationsSettingValue };
export { useHasAndroidMessageNotificationsSetting };
