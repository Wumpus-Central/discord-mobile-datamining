// === Module 15053: toggle ===

// Module 15053 (toggle)
import obj132 from "obj132" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 2501 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4066 */;
import MobileUserSettings from "MobileUserSettings" /* 8198 */;
import onNotifyFriendsOnProfileUpdateSettingsChanged from "onNotifyFriendsOnProfileUpdateSettingsChanged" /* 15054 */;
import createToggle from "createToggle" /* 10669 */;

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