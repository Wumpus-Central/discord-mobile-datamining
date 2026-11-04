// === Module 16863: AccountAgeGroupAdultSetting ===

// Module 16863 (AccountAgeGroupAdultSetting)
import util from "util" /* 1113 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5827 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6861 */;
import SettingsConstants from "SettingsConstants" /* 8573 */;
import AgeNoticeSettingsPredicate from "AgeNoticeSettingsPredicate" /* 16819 */;
import SettingBuilders from "SettingBuilders" /* 11728 */;
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
    const isTinyBroncoSettingsEnabled = AgeNoticeSettingsPredicate.useIsTinyBroncoSettingsEnabled();
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
    const isTinyBroncoSettingsEnabled = AgeNoticeSettingsPredicate.useIsTinyBroncoSettingsEnabled();
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