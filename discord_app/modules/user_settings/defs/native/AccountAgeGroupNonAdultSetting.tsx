// discord_app/modules/user_settings/defs/native/AccountAgeGroupNonAdultSetting.tsx
import set from "../../../../../_runtime/00002_set.js";
import getSystemLocale from "../../../../intl/index.native.tsx";
import isFeatureAgeGated from "../../../regional_feature_config/RegionalFeatureConfigUtils.tsx";
import useAgeVerificationRunner from "../../../age_assurance/AgeVerificationUtils.tsx";
import openIncodeAgeVerificationModalDefault from "../../../age_assurance/AgeVerificationActionCreators.native.tsx";
import AgeVerificationModalEntryPoint from "../../../age_assurance/AgeVerificationAnalyticsUtils.tsx";
import MobileUserSettings from "../../core/native/SettingsConstants.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";

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
      const intl2 = tmp(1236).intl;
      stringResult = intl2.string(tmp(1236).t.sK0dmH);
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
      const intl2 = tmp(1236).intl;
      stringResult = intl2.string(tmp(1236).t.sK0dmH);
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