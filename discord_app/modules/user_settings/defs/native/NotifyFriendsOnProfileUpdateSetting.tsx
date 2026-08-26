// === Module 15226: toggle ===

// Module 15226 (toggle)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 2535 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4134 */;
import MobileUserSettings from "MobileUserSettings" /* 8302 */;
import onNotifyFriendsOnProfileUpdateSettingsChanged from "onNotifyFriendsOnProfileUpdateSettingsChanged" /* 15227 */;
import createToggle from "createToggle" /* 10584 */;

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
const obj = {
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
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnProfileUpdateSetting.tsx");

export default toggle;