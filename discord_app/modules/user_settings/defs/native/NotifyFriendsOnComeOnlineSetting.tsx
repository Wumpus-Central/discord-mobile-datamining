// === Module 15052: toggle ===

// Module 15052 (toggle)
import obj132 from "obj132" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 2469 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4066 */;
import MobileUserSettings from "MobileUserSettings" /* 8198 */;
import onFriendOnlineNotificationSettingsChanged from "onFriendOnlineNotificationSettingsChanged" /* 14811 */;
import createToggle from "createToggle" /* 10669 */;

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
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnComeOnlineSetting.tsx");

export default toggle;