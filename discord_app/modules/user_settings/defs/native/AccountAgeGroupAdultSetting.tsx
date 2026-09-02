// === Module 14597: ? ===

// Module 14597
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import isFeatureAgeGated from "isFeatureAgeGated" /* 4172 */;
import useAgeVerificationRunner from "useAgeVerificationRunner" /* 4733 */;
import MobileUserSettings from "MobileUserSettings" /* 7893 */;
import createToggle from "createToggle" /* 11288 */;

let obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["/52UYy"]);
  },
  parent: MobileUserSettings.MobileUserSettings.ACCOUNT,
  useTrailing() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.XxRj7f);
  },
  usePredicate: function useAccountAgeGroupAdultSettingPredicate() {
    const isAgeVerified = useAgeVerificationRunner.useIsAgeVerified();
    const obj = useAgeVerificationRunner;
    const isVerifiedTeen = useAgeVerificationRunner.useIsVerifiedTeen();
    const obj2 = useAgeVerificationRunner;
    const obj3 = isFeatureAgeGated;
    return isFeatureAgeGated.useHasAgeGatedFeatures() && isAgeVerified && !isVerifiedTeen;
  }
};
const createStaticResult = createToggle.createStatic({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["/52UYy"]);
  },
  parent: MobileUserSettings.MobileUserSettings.ACCOUNT,
  useTrailing() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.XxRj7f);
  },
  usePredicate: function useAccountAgeGroupAdultSettingPredicate() {
    const isAgeVerified = useAgeVerificationRunner.useIsAgeVerified();
    const obj = useAgeVerificationRunner;
    const isVerifiedTeen = useAgeVerificationRunner.useIsVerifiedTeen();
    const obj2 = useAgeVerificationRunner;
    const obj3 = isFeatureAgeGated;
    return isFeatureAgeGated.useHasAgeGatedFeatures() && isAgeVerified && !isVerifiedTeen;
  }
});
const result = set.fileFinishedImporting("modules/user_settings/defs/native/AccountAgeGroupAdultSetting.tsx");

export default createStaticResult;