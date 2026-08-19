// === Module 14128: pressable ===

// Module 14128 (pressable)
import obj132 from "obj132" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import isFeatureAgeGated from "isFeatureAgeGated" /* 4072 */;
import useAgeVerificationRunner from "useAgeVerificationRunner" /* 4992 */;
import AgeVerificationModalEntryPoint from "AgeVerificationModalEntryPoint" /* 5254 */;
import openIncodeAgeVerificationModalDefault from "openIncodeAgeVerificationModal" /* 5428 */;
import MobileUserSettings from "MobileUserSettings" /* 8198 */;
import createToggle from "createToggle" /* 10669 */;

const pressable = createToggle.createPressable({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["/52UYy"]);
  },
  parent: MobileUserSettings.MobileUserSettings.ACCOUNT,
  useTrailing: function useAccountAgeGroupNonAdultSettingTrailing() {
    const isAgeVerified = useAgeVerificationRunner.useIsAgeVerified();
    const intl = getSystemLocale.intl;
    let stringResult = intl.string(getSystemLocale.t.lKDPGA);
    if (isAgeVerified) {
      const intl2 = getSystemLocale.intl;
      stringResult = intl2.string(getSystemLocale.t.sK0dmH);
    }
    return stringResult;
  },
  onPress: function onAccountAgeGroupNonAdultSettingPress() {
    const obj = { entryPoint: AgeVerificationModalEntryPoint.AgeVerificationModalEntryPoint.ACCOUNT_AGE_GROUP };
    const result = obj.showAgeVerificationGetStartedModal(obj);
  },
  withArrow: true,
  usePredicate: function AccountAgeGroupNonAdultSettingPredicate() {
    const isAgeVerified = useAgeVerificationRunner.useIsAgeVerified();
    const isVerifiedTeen = useAgeVerificationRunner.useIsVerifiedTeen();
    let hasTeenDefaults = isFeatureAgeGated.useHasTeenDefaults();
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
let result = obj132.fileFinishedImporting("modules/user_settings/defs/native/AccountAgeGroupNonAdultSetting.tsx");

export default pressable;