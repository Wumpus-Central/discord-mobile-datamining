// === Module 15701: pressable ===

// Module 15701 (pressable)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import _modDef4190 from "module_4190" /* 4190 */;
import MobileUserSettings from "MobileUserSettings" /* 7893 */;
import createToggle from "createToggle" /* 11288 */;

const MarketingURLs = ME.MarketingURLs;
const pressable = createToggle.createPressable({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.lfC1KR);
  },
  parent: MobileUserSettings.MobileUserSettings.DATA_AND_PRIVACY,
  onPress: function onTermsOfServicePress() {
    _modDef4190.openURL(MarketingURLs.TERMS);
  },
  withArrow: true
});
const obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.lfC1KR);
  },
  parent: MobileUserSettings.MobileUserSettings.DATA_AND_PRIVACY,
  onPress: function onTermsOfServicePress() {
    _modDef4190.openURL(MarketingURLs.TERMS);
  },
  withArrow: true
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/SafetyTermsOfServiceSetting.tsx");

export default pressable;