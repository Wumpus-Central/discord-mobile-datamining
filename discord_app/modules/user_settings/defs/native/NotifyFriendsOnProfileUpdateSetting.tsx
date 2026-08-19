// discord_app/modules/user_settings/defs/native/NotifyFriendsOnProfileUpdateSetting.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import getSystemLocale from "../../../../intl/index.native.tsx";
import messagesProxyDefault from "../../../notifications/profile_updates/sender/NotifyFriendsOnProfileUpdate.messages.js";
import explicitContentFromProto from "../../UserSettings.tsx";
import MobileUserSettings from "../../core/native/SettingsConstants.tsx";
import onNotifyFriendsOnProfileUpdateSettingsChanged from "../../../notifications/profile_updates/sender/NotifyFriendsOnProfileUpdateUtils.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.F3llsQ);
  },
  useDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault["6goWcz"]);
  },
  parent: MobileUserSettings.MobileUserSettings.DATA_AND_PRIVACY,
  useValue: explicitContentFromProto.NotifyFriendsOnProfileUpdate.useSetting,
  onValueChange: onNotifyFriendsOnProfileUpdateSettingsChanged.onNotifyFriendsOnProfileUpdateSettingsChanged
});
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnProfileUpdateSetting.tsx");

export default toggle;