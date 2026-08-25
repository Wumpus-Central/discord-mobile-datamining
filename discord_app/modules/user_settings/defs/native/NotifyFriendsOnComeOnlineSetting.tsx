// === Module 15146: toggle ===

// Module 15146 (toggle)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 2471 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4070 */;
import MobileUserSettings from "MobileUserSettings" /* 8235 */;
import onFriendOnlineNotificationSettingsChanged from "onFriendOnlineNotificationSettingsChanged" /* 14905 */;
import createToggle from "createToggle" /* 10516 */;

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