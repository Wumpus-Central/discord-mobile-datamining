// discord_app/modules/user_settings/defs/native/AccountAgeGroupNonAdultSetting.tsx
import createToggle from "createToggle";

const pressable = createToggle.createPressable({
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["/52UYy"]);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT,
  useTrailing: function useAccountAgeGroupNonAdultSettingTrailing() {
    const isAgeVerified = require("../../../age_assurance/AgeVerificationUtils.tsx") /* useAgeVerificationRunner */.useIsAgeVerified();
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    let stringResult = intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.lKDPGA);
    if (isAgeVerified) {
      const intl2 = tmp(1236).intl;
      stringResult = intl2.string(tmp(1236).t.sK0dmH);
    }
    return stringResult;
  },
  onPress: function onAccountAgeGroupNonAdultSettingPress() {
    let obj = require("../../../age_assurance/AgeVerificationActionCreators.native.tsx");
    obj = { entryPoint: require("../../../age_assurance/AgeVerificationAnalyticsUtils.tsx") /* AgeVerificationModalEntryPoint */.AgeVerificationModalEntryPoint.ACCOUNT_AGE_GROUP };
    const result = obj.showAgeVerificationGetStartedModal(obj);
  },
  withArrow: true,
  usePredicate: function AccountAgeGroupNonAdultSettingPredicate() {
    const isAgeVerified = require("../../../age_assurance/AgeVerificationUtils.tsx") /* useAgeVerificationRunner */.useIsAgeVerified();
    const obj = require("../../../age_assurance/AgeVerificationUtils.tsx") /* useAgeVerificationRunner */;
    const isVerifiedTeen = require("../../../age_assurance/AgeVerificationUtils.tsx") /* useAgeVerificationRunner */.useIsVerifiedTeen();
    const obj2 = require("../../../age_assurance/AgeVerificationUtils.tsx") /* useAgeVerificationRunner */;
    let hasTeenDefaults = require("../../../regional_feature_config/RegionalFeatureConfigUtils.tsx") /* isFeatureAgeGated */.useHasTeenDefaults();
    if (hasTeenDefaults) {
      let tmp4 = !isAgeVerified;
      if (isAgeVerified) {
        tmp4 = isVerifiedTeen;
      }
      hasTeenDefaults = tmp4;
    }
    return hasTeenDefaults;
  }
});
let obj = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["/52UYy"]);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT,
  useTrailing: function useAccountAgeGroupNonAdultSettingTrailing() {
    const isAgeVerified = require("../../../age_assurance/AgeVerificationUtils.tsx") /* useAgeVerificationRunner */.useIsAgeVerified();
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    let stringResult = intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.lKDPGA);
    if (isAgeVerified) {
      const intl2 = tmp(1236).intl;
      stringResult = intl2.string(tmp(1236).t.sK0dmH);
    }
    return stringResult;
  },
  onPress: function onAccountAgeGroupNonAdultSettingPress() {
    let obj = require("../../../age_assurance/AgeVerificationActionCreators.native.tsx");
    obj = { entryPoint: require("../../../age_assurance/AgeVerificationAnalyticsUtils.tsx") /* AgeVerificationModalEntryPoint */.AgeVerificationModalEntryPoint.ACCOUNT_AGE_GROUP };
    const result = obj.showAgeVerificationGetStartedModal(obj);
  },
  withArrow: true,
  usePredicate: function AccountAgeGroupNonAdultSettingPredicate() {
    const isAgeVerified = require("../../../age_assurance/AgeVerificationUtils.tsx") /* useAgeVerificationRunner */.useIsAgeVerified();
    const obj = require("../../../age_assurance/AgeVerificationUtils.tsx") /* useAgeVerificationRunner */;
    const isVerifiedTeen = require("../../../age_assurance/AgeVerificationUtils.tsx") /* useAgeVerificationRunner */.useIsVerifiedTeen();
    const obj2 = require("../../../age_assurance/AgeVerificationUtils.tsx") /* useAgeVerificationRunner */;
    let hasTeenDefaults = require("../../../regional_feature_config/RegionalFeatureConfigUtils.tsx") /* isFeatureAgeGated */.useHasTeenDefaults();
    if (hasTeenDefaults) {
      let tmp4 = !isAgeVerified;
      if (isAgeVerified) {
        tmp4 = isVerifiedTeen;
      }
      hasTeenDefaults = tmp4;
    }
    return hasTeenDefaults;
  }
};
let result = require("AgeVerificationModalEntryPoint").fileFinishedImporting("modules/user_settings/defs/native/AccountAgeGroupNonAdultSetting.tsx");

export default pressable;