// === Module 14125: ? ===

// Module 14125
import obj132 from "obj132" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import isFeatureAgeGated from "isFeatureAgeGated" /* 4072 */;
import useAgeVerificationRunner from "useAgeVerificationRunner" /* 4992 */;
import MobileUserSettings from "MobileUserSettings" /* 8198 */;
import createToggle from "createToggle" /* 10669 */;

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
    const isVerifiedTeen = useAgeVerificationRunner.useIsVerifiedTeen();
    return isFeatureAgeGated.useHasAgeGatedFeatures() && isAgeVerified && !isVerifiedTeen;
  }
});
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/AccountAgeGroupAdultSetting.tsx");

export default createStaticResult;