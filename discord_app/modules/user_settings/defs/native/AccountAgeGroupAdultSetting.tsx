// === Module 14815: AccountAgeGroupAdultSetting ===

// Module 14815 (AccountAgeGroupAdultSetting)
import util from "util" /* 1126 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 5905 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5918 */;
import SettingsConstants from "SettingsConstants" /* 7966 */;
import TinyBroncoSettingsPredicate from "TinyBroncoSettingsPredicate" /* 14771 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAccountAgeGroupAdultSettingPredicate() {
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
}) : (function useAccountAgeGroupAdultSettingPredicate() {
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
});
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
  usePredicate: ReactCompilerGating.isReactCompilerEnabled() ? (function useAccountAgeGroupAdultSettingPredicate() {
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
  }) : (function useAccountAgeGroupAdultSettingPredicate() {
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
  })
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
  usePredicate: ReactCompilerGating.isReactCompilerEnabled() ? (function useAccountAgeGroupAdultSettingPredicate() {
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
  }) : (function useAccountAgeGroupAdultSettingPredicate() {
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
  })
});