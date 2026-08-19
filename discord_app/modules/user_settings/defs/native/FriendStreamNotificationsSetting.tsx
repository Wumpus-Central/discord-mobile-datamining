// discord_app/modules/user_settings/defs/native/FriendStreamNotificationsSetting.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import getSystemLocale from "../../../../intl/index.native.tsx";
import explicitContentFromProto from "../../UserSettings.tsx";
import MobileUserSettings from "../../core/native/SettingsConstants.tsx";
import onGoLiveNotificationSettingsChanged from "../../../go_live/GoLiveNotificationUtils.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.FEFn90);
  },
  parent: MobileUserSettings.MobileUserSettings.NOTIFICATIONS,
  useValue: explicitContentFromProto.StreamNotificationsEnabled.useSetting,
  onValueChange: onGoLiveNotificationSettingsChanged.onGoLiveNotificationSettingsChanged
});
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/FriendStreamNotificationsSetting.tsx");

export default toggle;