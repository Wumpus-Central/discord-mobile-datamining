// === Module 17135: AccountAgeGroupAdultSetting ===

// Module 17135 (AccountAgeGroupAdultSetting)
import util from "util" /* 1113 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5932 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6767 */;
import SettingsConstants from "SettingsConstants" /* 9136 */;
import AgeNoticeSettingsPredicate from "AgeNoticeSettingsPredicate" /* 17091 */;
import SettingBuilders from "SettingBuilders" /* 12317 */;
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
    const isAgeNoticeSettingsEnabled = AgeNoticeSettingsPredicate.useIsAgeNoticeSettingsEnabled();
    if (hasAgeGatedFeatures) {
      hasAgeGatedFeatures = isAgeVerified;
    }
    if (hasAgeGatedFeatures) {
      hasAgeGatedFeatures = !isVerifiedTeen;
    }
    if (hasAgeGatedFeatures) {
      hasAgeGatedFeatures = !isAgeNoticeSettingsEnabled;
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
    const isAgeNoticeSettingsEnabled = AgeNoticeSettingsPredicate.useIsAgeNoticeSettingsEnabled();
    if (hasAgeGatedFeatures) {
      hasAgeGatedFeatures = isAgeVerified;
    }
    if (hasAgeGatedFeatures) {
      hasAgeGatedFeatures = !isVerifiedTeen;
    }
    if (hasAgeGatedFeatures) {
      hasAgeGatedFeatures = !isAgeNoticeSettingsEnabled;
    }
    return hasAgeGatedFeatures;
  }
});