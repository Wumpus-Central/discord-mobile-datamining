// === Module 17861: SafetyTermsOfServiceSetting ===

// Module 17861 (SafetyTermsOfServiceSetting)
import Constants from "Constants" /* 1072 */;
import util from "util" /* 1114 */;
import LinkingDefault from "Linking" /* 5704 */;
import SettingsConstants from "SettingsConstants" /* 8424 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
import size from "module_2" /* 2 */;

const MarketingURLs = Constants.MarketingURLs;
const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.lfC1KR);
  },
  parent: SettingsConstants.MobileUserSettings.DATA_AND_PRIVACY,
  onPress: function onTermsOfServicePress() {
    LinkingDefault.openURL(MarketingURLs.TERMS);
  },
  withArrow: true
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SafetyTermsOfServiceSetting.tsx");

export default pressable;