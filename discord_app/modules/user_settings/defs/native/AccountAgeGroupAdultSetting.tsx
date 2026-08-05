// discord_app/modules/user_settings/defs/native/AccountAgeGroupAdultSetting.tsx
import createToggle from "createToggle";

let obj = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["/52UYy"]);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT,
  useTrailing() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.XxRj7f);
  },
  usePredicate: function useAccountAgeGroupAdultSettingPredicate() {
    const isAgeVerified = require("../../../age_assurance/AgeVerificationUtils.tsx") /* useAgeVerificationRunner */.useIsAgeVerified();
    const obj = require("../../../age_assurance/AgeVerificationUtils.tsx") /* useAgeVerificationRunner */;
    const isVerifiedTeen = require("../../../age_assurance/AgeVerificationUtils.tsx") /* useAgeVerificationRunner */.useIsVerifiedTeen();
    const obj2 = require("../../../age_assurance/AgeVerificationUtils.tsx") /* useAgeVerificationRunner */;
    const obj3 = require("../../../regional_feature_config/RegionalFeatureConfigUtils.tsx") /* isFeatureAgeGated */;
    return require("../../../regional_feature_config/RegionalFeatureConfigUtils.tsx") /* isFeatureAgeGated */.useHasAgeGatedFeatures() && isAgeVerified && !isVerifiedTeen;
  }
};
const createStaticResult = createToggle.createStatic({
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["/52UYy"]);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT,
  useTrailing() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.XxRj7f);
  },
  usePredicate: function useAccountAgeGroupAdultSettingPredicate() {
    const isAgeVerified = require("../../../age_assurance/AgeVerificationUtils.tsx") /* useAgeVerificationRunner */.useIsAgeVerified();
    const obj = require("../../../age_assurance/AgeVerificationUtils.tsx") /* useAgeVerificationRunner */;
    const isVerifiedTeen = require("../../../age_assurance/AgeVerificationUtils.tsx") /* useAgeVerificationRunner */.useIsVerifiedTeen();
    const obj2 = require("../../../age_assurance/AgeVerificationUtils.tsx") /* useAgeVerificationRunner */;
    const obj3 = require("../../../regional_feature_config/RegionalFeatureConfigUtils.tsx") /* isFeatureAgeGated */;
    return require("../../../regional_feature_config/RegionalFeatureConfigUtils.tsx") /* isFeatureAgeGated */.useHasAgeGatedFeatures() && isAgeVerified && !isVerifiedTeen;
  }
});
const result = require("isFeatureAgeGated").fileFinishedImporting("modules/user_settings/defs/native/AccountAgeGroupAdultSetting.tsx");

export default createStaticResult;