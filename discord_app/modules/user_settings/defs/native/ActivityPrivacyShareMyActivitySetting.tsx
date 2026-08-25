// === Module 15141: toggle ===

// Module 15141 (toggle)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 2471 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4070 */;
import MobileUserSettings from "MobileUserSettings" /* 8235 */;
import createToggle from "createToggle" /* 10516 */;

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.WhdCGP);
  },
  useDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.UQ9RHJ);
  },
  parent: MobileUserSettings.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: explicitContentFromProto.ShowCurrentGame.useSetting,
  onValueChange: explicitContentFromProto.ShowCurrentGame.updateSetting
});
const obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.WhdCGP);
  },
  useDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.UQ9RHJ);
  },
  parent: MobileUserSettings.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: explicitContentFromProto.ShowCurrentGame.useSetting,
  onValueChange: explicitContentFromProto.ShowCurrentGame.updateSetting
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/ActivityPrivacyShareMyActivitySetting.tsx");

export default toggle;