// discord_app/modules/user_settings/defs/native/NotifyFriendsOnComeOnlineSetting.tsx
import set from "../../../../../_runtime/00002_set.js";
import getSystemLocale from "../../../../intl/index.native.tsx";
import messagesProxyDefault from "../../../activity_privacy/ActivityPrivacy.messages.js";
import explicitContentFromProto from "../../UserSettings.tsx";
import MobileUserSettings from "../../core/native/SettingsConstants.tsx";
import onFriendOnlineNotificationSettingsChanged from "../../../notifications/friend_online/FriendOnlineNotificationUtils.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.A0FVCV);
  },
  useDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.vHX6RG);
  },
  parent: MobileUserSettings.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: explicitContentFromProto.NotifyFriendsOnComeOnline.useSetting,
  onValueChange: onFriendOnlineNotificationSettingsChanged.onNotifyFriendsOnComeOnlineSettingsChanged
});
const obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.A0FVCV);
  },
  useDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.vHX6RG);
  },
  parent: MobileUserSettings.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: explicitContentFromProto.NotifyFriendsOnComeOnline.useSetting,
  onValueChange: onFriendOnlineNotificationSettingsChanged.onNotifyFriendsOnComeOnlineSettingsChanged
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnComeOnlineSetting.tsx");

export default toggle;