import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { useAgeVerificationRunner } from "../../../age_assurance/AgeVerificationUtils.tsx";
import { isFeatureAgeGated } from "../../../regional_feature_config/RegionalFeatureConfigUtils.tsx";
// discord_app/modules/user_settings/defs/native/AccountAgeGroupAdultSetting.tsx
import createToggle from "createToggle";

let obj = {
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t["/52UYy"]);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT,
  useTrailing() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t.XxRj7f);
  },
  usePredicate: function useAccountAgeGroupAdultSettingPredicate() {
    const isAgeVerified = useAgeVerificationRunner /* useAgeVerificationRunner */.useIsAgeVerified();
    const obj = useAgeVerificationRunner /* useAgeVerificationRunner */;
    const isVerifiedTeen = useAgeVerificationRunner /* useAgeVerificationRunner */.useIsVerifiedTeen();
    const obj2 = useAgeVerificationRunner /* useAgeVerificationRunner */;
    const obj3 = isFeatureAgeGated /* isFeatureAgeGated */;
    return isFeatureAgeGated /* isFeatureAgeGated */.useHasAgeGatedFeatures() && isAgeVerified && !isVerifiedTeen;
  }
};
const createStaticResult = createToggle.createStatic({
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t["/52UYy"]);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT,
  useTrailing() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t.XxRj7f);
  },
  usePredicate: function useAccountAgeGroupAdultSettingPredicate() {
    const isAgeVerified = useAgeVerificationRunner /* useAgeVerificationRunner */.useIsAgeVerified();
    const obj = useAgeVerificationRunner /* useAgeVerificationRunner */;
    const isVerifiedTeen = useAgeVerificationRunner /* useAgeVerificationRunner */.useIsVerifiedTeen();
    const obj2 = useAgeVerificationRunner /* useAgeVerificationRunner */;
    const obj3 = isFeatureAgeGated /* isFeatureAgeGated */;
    return isFeatureAgeGated /* isFeatureAgeGated */.useHasAgeGatedFeatures() && isAgeVerified && !isVerifiedTeen;
  }
});
const result = require("isFeatureAgeGated").fileFinishedImporting("modules/user_settings/defs/native/AccountAgeGroupAdultSetting.tsx");

export default createStaticResult;