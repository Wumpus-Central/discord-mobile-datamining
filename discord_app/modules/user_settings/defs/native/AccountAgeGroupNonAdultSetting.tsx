// discord_app/modules/user_settings/defs/native/AccountAgeGroupNonAdultSetting.tsx
import createToggle from "createToggle";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { openIncodeAgeVerificationModal } from "../../../age_assurance/AgeVerificationActionCreators.native.tsx";
import { AgeVerificationModalEntryPoint } from "../../../age_assurance/AgeVerificationAnalyticsUtils.tsx";
import { useAgeVerificationRunner } from "../../../age_assurance/AgeVerificationUtils.tsx";
import { isFeatureAgeGated } from "../../../regional_feature_config/RegionalFeatureConfigUtils.tsx";

const pressable = createToggle.createPressable({
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t["/52UYy"]);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT,
  useTrailing: function useAccountAgeGroupNonAdultSettingTrailing() {
    const isAgeVerified = useAgeVerificationRunner /* useAgeVerificationRunner */.useIsAgeVerified();
    const intl = getSystemLocale /* getSystemLocale */.intl;
    let stringResult = intl.string(getSystemLocale /* getSystemLocale */.t.lKDPGA);
    if (isAgeVerified) {
      const intl2 = tmp(1236).intl;
      stringResult = intl2.string(tmp(1236).t.sK0dmH);
    }
    return stringResult;
  },
  onPress: function onAccountAgeGroupNonAdultSettingPress() {
    let obj = openIncodeAgeVerificationModal;
    obj = { entryPoint: AgeVerificationModalEntryPoint /* AgeVerificationModalEntryPoint */.AgeVerificationModalEntryPoint.ACCOUNT_AGE_GROUP };
    const result = obj.showAgeVerificationGetStartedModal(obj);
  },
  withArrow: true,
  usePredicate: function AccountAgeGroupNonAdultSettingPredicate() {
    const isAgeVerified = useAgeVerificationRunner /* useAgeVerificationRunner */.useIsAgeVerified();
    const obj = useAgeVerificationRunner /* useAgeVerificationRunner */;
    const isVerifiedTeen = useAgeVerificationRunner /* useAgeVerificationRunner */.useIsVerifiedTeen();
    const obj2 = useAgeVerificationRunner /* useAgeVerificationRunner */;
    let hasTeenDefaults = isFeatureAgeGated /* isFeatureAgeGated */.useHasTeenDefaults();
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
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t["/52UYy"]);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT,
  useTrailing: function useAccountAgeGroupNonAdultSettingTrailing() {
    const isAgeVerified = useAgeVerificationRunner /* useAgeVerificationRunner */.useIsAgeVerified();
    const intl = getSystemLocale /* getSystemLocale */.intl;
    let stringResult = intl.string(getSystemLocale /* getSystemLocale */.t.lKDPGA);
    if (isAgeVerified) {
      const intl2 = tmp(1236).intl;
      stringResult = intl2.string(tmp(1236).t.sK0dmH);
    }
    return stringResult;
  },
  onPress: function onAccountAgeGroupNonAdultSettingPress() {
    let obj = openIncodeAgeVerificationModal;
    obj = { entryPoint: AgeVerificationModalEntryPoint /* AgeVerificationModalEntryPoint */.AgeVerificationModalEntryPoint.ACCOUNT_AGE_GROUP };
    const result = obj.showAgeVerificationGetStartedModal(obj);
  },
  withArrow: true,
  usePredicate: function AccountAgeGroupNonAdultSettingPredicate() {
    const isAgeVerified = useAgeVerificationRunner /* useAgeVerificationRunner */.useIsAgeVerified();
    const obj = useAgeVerificationRunner /* useAgeVerificationRunner */;
    const isVerifiedTeen = useAgeVerificationRunner /* useAgeVerificationRunner */.useIsVerifiedTeen();
    const obj2 = useAgeVerificationRunner /* useAgeVerificationRunner */;
    let hasTeenDefaults = isFeatureAgeGated /* isFeatureAgeGated */.useHasTeenDefaults();
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