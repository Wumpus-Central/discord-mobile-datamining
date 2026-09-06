// discord_app/modules/user_settings/defs/native/FriendAnniversaryNotificationSetting.tsx
import util from "../../../../intl/index.native.tsx";
import UserSettings from "../../UserSettings.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import MobileFriendAnniversaryExperimentDefault from "../../../premium/gifting/native/MobileFriendAnniversaryExperiment.tsx";
import FriendAnniversaryNotificationUtils from "../../../premium/FriendAnniversaryNotificationUtils.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.BVO96v);
  },
  parent: SettingsConstants.MobileUserSettings.NOTIFICATIONS,
  useValue: UserSettings.EnableFriendAnniversaryNotifications.useSetting,
  useDescription() {
    const intl = util.intl;
    return intl.string(util.t["00TNo7"]);
  },
  onValueChange: FriendAnniversaryNotificationUtils.onFriendAnniversaryNotificationSettingsChanged,
  usePredicate() {
    return MobileFriendAnniversaryExperimentDefault.useConfig({ location: "FriendAnniversaryNotificationSetting" })
      .enabled;
  },
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FriendAnniversaryNotificationSetting.tsx");

export default toggle;
