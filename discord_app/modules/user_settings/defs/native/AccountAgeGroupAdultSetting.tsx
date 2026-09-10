// === Module 14833: AccountAgeGroupAdultSetting ===

// Module 14833 (AccountAgeGroupAdultSetting)
import util from "util" /* 1114 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 4818 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5473 */;
import SettingsConstants from "SettingsConstants" /* 8027 */;
import TinyBroncoSettingsPredicate from "TinyBroncoSettingsPredicate" /* 14760 */;
import SettingBuilders from "SettingBuilders" /* 11540 */;
import size from "module_2" /* 2 */;

let obj = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["/52UYy"]);
  },
  parent: SettingsConstants.MobileUserSettings.ACCOUNT,
  useTrailing() {
    const intl = util.intl;
    return intl.string(util.t.XxRj7f);
  },
  usePredicate: function useAccountAgeGroupAdultSettingPredicate() {
    const isAgeVerified = AgeVerificationUtils.useIsAgeVerified();
    const isVerifiedTeen = AgeVerificationUtils.useIsVerifiedTeen();
    let hasAgeGatedFeatures = RegionalFeatureConfigUtils.useHasAgeGatedFeatures();
    const isTinyBroncoSettingsEnabled = TinyBroncoSettingsPredicate.useIsTinyBroncoSettingsEnabled();
    if (hasAgeGatedFeatures) {
      hasAgeGatedFeatures = isAgeVerified;
    }
    if (hasAgeGatedFeatures) {
      hasAgeGatedFeatures = !isVerifiedTeen;
    }
    if (hasAgeGatedFeatures) {
      hasAgeGatedFeatures = !isTinyBroncoSettingsEnabled;
    }
    return hasAgeGatedFeatures;
  }
};
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountAgeGroupAdultSetting.tsx");

export default SettingBuilders.createStatic({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["/52UYy"]);
  },
  parent: SettingsConstants.MobileUserSettings.ACCOUNT,
  useTrailing() {
    const intl = util.intl;
    return intl.string(util.t.XxRj7f);
  },
  usePredicate: function useAccountAgeGroupAdultSettingPredicate() {
    const isAgeVerified = AgeVerificationUtils.useIsAgeVerified();
    const isVerifiedTeen = AgeVerificationUtils.useIsVerifiedTeen();
    let hasAgeGatedFeatures = RegionalFeatureConfigUtils.useHasAgeGatedFeatures();
    const isTinyBroncoSettingsEnabled = TinyBroncoSettingsPredicate.useIsTinyBroncoSettingsEnabled();
    if (hasAgeGatedFeatures) {
      hasAgeGatedFeatures = isAgeVerified;
    }
    if (hasAgeGatedFeatures) {
      hasAgeGatedFeatures = !isVerifiedTeen;
    }
    if (hasAgeGatedFeatures) {
      hasAgeGatedFeatures = !isTinyBroncoSettingsEnabled;
    }
    return hasAgeGatedFeatures;
  }
});