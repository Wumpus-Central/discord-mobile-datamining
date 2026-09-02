// === Module 14600: pressable ===

// Module 14600 (pressable)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import isFeatureAgeGated from "isFeatureAgeGated" /* 4172 */;
import useAgeVerificationRunner from "useAgeVerificationRunner" /* 4733 */;
import MobileUserSettings from "MobileUserSettings" /* 7893 */;
import openIncodeAgeVerificationModalDefault from "openIncodeAgeVerificationModal" /* 8697 */;
import AgeVerificationModalEntryPoint from "AgeVerificationModalEntryPoint" /* 8699 */;
import createToggle from "createToggle" /* 11288 */;

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
      const intl2 = tmp(1233).intl;
      stringResult = intl2.string(tmp(1233).t.sK0dmH);
    }
    return stringResult;
  },
  onPress: function onAccountAgeGroupNonAdultSettingPress() {
    let obj = openIncodeAgeVerificationModalDefault;
    obj = { entryPoint: AgeVerificationModalEntryPoint.AgeVerificationModalEntryPoint.ACCOUNT_AGE_GROUP };
    const result = obj.showAgeVerificationGetStartedModal(obj);
  },
  withArrow: true,
  usePredicate: function AccountAgeGroupNonAdultSettingPredicate() {
    const isAgeVerified = useAgeVerificationRunner.useIsAgeVerified();
    const obj = useAgeVerificationRunner;
    const isVerifiedTeen = useAgeVerificationRunner.useIsVerifiedTeen();
    const obj2 = useAgeVerificationRunner;
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
let obj = {
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
      const intl2 = tmp(1233).intl;
      stringResult = intl2.string(tmp(1233).t.sK0dmH);
    }
    return stringResult;
  },
  onPress: function onAccountAgeGroupNonAdultSettingPress() {
    let obj = openIncodeAgeVerificationModalDefault;
    obj = { entryPoint: AgeVerificationModalEntryPoint.AgeVerificationModalEntryPoint.ACCOUNT_AGE_GROUP };
    const result = obj.showAgeVerificationGetStartedModal(obj);
  },
  withArrow: true,
  usePredicate: function AccountAgeGroupNonAdultSettingPredicate() {
    const isAgeVerified = useAgeVerificationRunner.useIsAgeVerified();
    const obj = useAgeVerificationRunner;
    const isVerifiedTeen = useAgeVerificationRunner.useIsVerifiedTeen();
    const obj2 = useAgeVerificationRunner;
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
};
let result = set.fileFinishedImporting("modules/user_settings/defs/native/AccountAgeGroupNonAdultSetting.tsx");

export default pressable;