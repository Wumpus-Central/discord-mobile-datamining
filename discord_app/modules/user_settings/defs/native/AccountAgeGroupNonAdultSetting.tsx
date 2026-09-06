// === Module 14758: pressable ===

// Module 14758 (pressable)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import useAgeVerificationRunner from "useAgeVerificationRunner" /* 4773 */;
import isFeatureAgeGated from "isFeatureAgeGated" /* 5423 */;
import MobileUserSettings from "MobileUserSettings" /* 7975 */;
import openIncodeAgeVerificationModalDefault from "openIncodeAgeVerificationModal" /* 8411 */;
import AgeVerificationModalEntryPoint from "AgeVerificationModalEntryPoint" /* 8413 */;
import useIsTinyBroncoSettingsEnabled from "useIsTinyBroncoSettingsEnabled" /* 14682 */;
import createToggle from "createToggle" /* 11468 */;

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
      const intl2 = tmp(1114).intl;
      stringResult = intl2.string(tmp(1114).t.sK0dmH);
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
    const obj3 = isFeatureAgeGated;
    const isTinyBroncoSettingsEnabled = useIsTinyBroncoSettingsEnabled.useIsTinyBroncoSettingsEnabled();
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
      const intl2 = tmp(1114).intl;
      stringResult = intl2.string(tmp(1114).t.sK0dmH);
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
    const obj3 = isFeatureAgeGated;
    const isTinyBroncoSettingsEnabled = useIsTinyBroncoSettingsEnabled.useIsTinyBroncoSettingsEnabled();
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
  }
};
let result = set.fileFinishedImporting("modules/user_settings/defs/native/AccountAgeGroupNonAdultSetting.tsx");

export default pressable;