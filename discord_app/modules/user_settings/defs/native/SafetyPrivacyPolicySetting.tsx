// === Module 17370: SafetyPrivacyPolicySetting ===

// Module 17370 (SafetyPrivacyPolicySetting)
import Constants from "Constants" /* 1071 */;
import util from "util" /* 1112 */;
import LinkingDefault from "Linking" /* 5592 */;
import SettingsConstants from "SettingsConstants" /* 8712 */;
import SettingBuilders from "SettingBuilders" /* 11937 */;
import size from "module_2" /* 2 */;

const MarketingURLs = Constants.MarketingURLs;
const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.KGFTww);
  },
  parent: SettingsConstants.MobileUserSettings.DATA_AND_PRIVACY,
  onPress: function onPrivacyPolicyPress() {
    LinkingDefault.openURL(MarketingURLs.PRIVACY);
  },
  withArrow: true
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SafetyPrivacyPolicySetting.tsx");

export default pressable;