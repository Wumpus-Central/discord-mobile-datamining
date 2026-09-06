// discord_app/modules/user_settings/defs/native/AndroidNotificationLightsSetting.tsx
import util from "../../../../intl/index.native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import SettingsNotificationUtils from "../../notifications/native/SettingsNotificationUtils.tsx";
import AndroidNotificationSettingsStore from "../../notifications/native/stores/AndroidNotificationSettingsStore.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

({ useAndroidNotificationLightsEnabled: c2, setAndroidNotificationLightsEnabled } = AndroidNotificationSettingsStore);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.E3xHUp);
  },
  parent: SettingsConstants.MobileUserSettings.NOTIFICATIONS,
  useValue: function useAndroidNotificationLightsSettingValue() {
    let flag = React2();
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  onValueChange: setAndroidNotificationLightsEnabled,
  usePredicate: function useHasAndroidNotificationLightsSetting() {
    const tmp = React2();
    const isIOSResult = PlatformUtils.isIOS();
    let tmp5 = !isIOSResult;
    if (!isIOSResult) {
      tmp5 = !SettingsNotificationUtils.hasAndroidNotificationChannels();
      const tmp2Result = SettingsNotificationUtils;
    }
    if (tmp5) {
      tmp5 = null != tmp;
    }
    return tmp5;
  },
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AndroidNotificationLightsSetting.tsx");

export default toggle;
