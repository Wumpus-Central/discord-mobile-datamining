// === Module 15110: pressable ===

// Module 15110 (pressable)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import _modDef4094 from "module_4094" /* 4094 */;
import MobileUserSettings from "MobileUserSettings" /* 8235 */;
import createToggle from "createToggle" /* 10516 */;

const MarketingURLs = ME.MarketingURLs;
const pressable = createToggle.createPressable({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.KGFTww);
  },
  parent: MobileUserSettings.MobileUserSettings.DATA_AND_PRIVACY,
  onPress: function onPrivacyPolicyPress() {
    _modDef4094.openURL(MarketingURLs.PRIVACY);
  },
  withArrow: true
});
const obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.KGFTww);
  },
  parent: MobileUserSettings.MobileUserSettings.DATA_AND_PRIVACY,
  onPress: function onPrivacyPolicyPress() {
    _modDef4094.openURL(MarketingURLs.PRIVACY);
  },
  withArrow: true
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/SafetyPrivacyPolicySetting.tsx");

export default pressable;