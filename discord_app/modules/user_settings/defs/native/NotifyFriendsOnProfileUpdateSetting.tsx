// === Module 15739: toggle ===

// Module 15739 (toggle)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import messagesProxyDefault from "messagesProxy" /* 2566 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4166 */;
import MobileUserSettings from "MobileUserSettings" /* 7893 */;
import onNotifyFriendsOnProfileUpdateSettingsChanged from "onNotifyFriendsOnProfileUpdateSettingsChanged" /* 15740 */;
import createToggle from "createToggle" /* 11288 */;

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