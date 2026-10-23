// === Module 17198: SafetyPrivacyPolicySetting ===

// Module 17198 (SafetyPrivacyPolicySetting)
import Constants from "Constants" /* 1087 */;
import util from "util" /* 1128 */;
import LinkingDefault from "Linking" /* 5646 */;
import SettingsConstants from "SettingsConstants" /* 8318 */;
import SettingBuilders from "SettingBuilders" /* 11181 */;
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