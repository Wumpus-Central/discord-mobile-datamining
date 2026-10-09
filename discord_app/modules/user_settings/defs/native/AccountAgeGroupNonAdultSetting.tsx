// === Module 14926: AccountAgeGroupNonAdultSetting ===

// Module 14926 (AccountAgeGroupNonAdultSetting)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 5906 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 5916 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5919 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7497 */;
import SettingsConstants from "SettingsConstants" /* 7974 */;
import TinyBroncoSettingsPredicate from "TinyBroncoSettingsPredicate" /* 14879 */;
import "ReactCompilerGating";
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 10629 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAccountAgeGroupNonAdultSettingTrailing() {
  const cResult = c.c(3);
  const isAgeVerified = AgeVerificationUtils.useIsAgeVerified();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.lKDPGA);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== isAgeVerified) {
    if (isAgeVerified) {
      const intl2 = util.intl;
      first = intl2.string(util.t.sK0dmH);
    }
    cResult[1] = isAgeVerified;
    cResult[2] = first;
    let tmp7 = first;
  } else {
    tmp7 = cResult[2];
  }
  return tmp7;
}) : (function useAccountAgeGroupNonAdultSettingTrailing() {
  const isAgeVerified = AgeVerificationUtils.useIsAgeVerified();
  const intl = util.intl;
  let stringResult = intl.string(util.t.lKDPGA);
  if (isAgeVerified) {
    const intl2 = util.intl;
    stringResult = intl2.string(util.t.sK0dmH);
  }
  return stringResult;
});
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function AccountAgeGroupNonAdultSettingPredicate() {
  const isAgeVerified = AgeVerificationUtils.useIsAgeVerified();
  const isVerifiedTeen = AgeVerificationUtils.useIsVerifiedTeen();
  let hasTeenDefaults = RegionalFeatureConfigUtils.useHasTeenDefaults();
  const isTinyBroncoSettingsEnabled = TinyBroncoSettingsPredicate.useIsTinyBroncoSettingsEnabled();
  if (hasTeenDefaults) {
    let tmp5 = !isAgeVerified;
    if (isAgeVerified) {
      tmp5 = isVerifiedTeen;
    }
    hasTeenDefaults = tmp5;
  }
  if (hasTeenDefaults) {
    hasTeenDefaults = !isTinyBroncoSettingsEnabled;
  }
  return hasTeenDefaults;
}) : (function AccountAgeGroupNonAdultSettingPredicate() {
  const isAgeVerified = AgeVerificationUtils.useIsAgeVerified();
  const isVerifiedTeen = AgeVerificationUtils.useIsVerifiedTeen();
  let hasTeenDefaults = RegionalFeatureConfigUtils.useHasTeenDefaults();
  const isTinyBroncoSettingsEnabled = TinyBroncoSettingsPredicate.useIsTinyBroncoSettingsEnabled();
  if (hasTeenDefaults) {
    let tmp5 = !isAgeVerified;
    if (isAgeVerified) {
      tmp5 = isVerifiedTeen;
    }
    hasTeenDefaults = tmp5;
  }
  if (hasTeenDefaults) {
    hasTeenDefaults = !isTinyBroncoSettingsEnabled;
  }
  return hasTeenDefaults;
});
const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["/52UYy"]);
  },
  parent: SettingsConstants.MobileUserSettings.ACCOUNT,
  useTrailing: tmp2,
  onPress: function onAccountAgeGroupNonAdultSettingPress() {
    const obj = AgeVerificationActionCreatorsDefault;
    const result = obj.showAgeVerificationGetStartedModal({ entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.ACCOUNT_AGE_GROUP });
  },
  withArrow: true,
  usePredicate: ReactCompilerGating.isReactCompilerEnabled() ? (function AccountAgeGroupNonAdultSettingPredicate() {
    const isAgeVerified = AgeVerificationUtils.useIsAgeVerified();
    const isVerifiedTeen = AgeVerificationUtils.useIsVerifiedTeen();
    let hasTeenDefaults = RegionalFeatureConfigUtils.useHasTeenDefaults();
    const isTinyBroncoSettingsEnabled = TinyBroncoSettingsPredicate.useIsTinyBroncoSettingsEnabled();
    if (hasTeenDefaults) {
      let tmp5 = !isAgeVerified;
      if (isAgeVerified) {
        tmp5 = isVerifiedTeen;
      }
      hasTeenDefaults = tmp5;
    }
    if (hasTeenDefaults) {
      hasTeenDefaults = !isTinyBroncoSettingsEnabled;
    }
    return hasTeenDefaults;
  }) : (function AccountAgeGroupNonAdultSettingPredicate() {
    const isAgeVerified = AgeVerificationUtils.useIsAgeVerified();
    const isVerifiedTeen = AgeVerificationUtils.useIsVerifiedTeen();
    let hasTeenDefaults = RegionalFeatureConfigUtils.useHasTeenDefaults();
    const isTinyBroncoSettingsEnabled = TinyBroncoSettingsPredicate.useIsTinyBroncoSettingsEnabled();
    if (hasTeenDefaults) {
      let tmp5 = !isAgeVerified;
      if (isAgeVerified) {
        tmp5 = isVerifiedTeen;
      }
      hasTeenDefaults = tmp5;
    }
    if (hasTeenDefaults) {
      hasTeenDefaults = !isTinyBroncoSettingsEnabled;
    }
    return hasTeenDefaults;
  })
});
let result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountAgeGroupNonAdultSetting.tsx");

export default pressable;