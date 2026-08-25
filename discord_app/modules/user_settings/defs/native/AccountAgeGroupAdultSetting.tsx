// === Module 14223: ? ===

// Module 14223
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import isFeatureAgeGated from "isFeatureAgeGated" /* 4076 */;
import useAgeVerificationRunner from "useAgeVerificationRunner" /* 4621 */;
import MobileUserSettings from "MobileUserSettings" /* 8235 */;
import createToggle from "createToggle" /* 10516 */;

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