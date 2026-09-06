// discord_app/modules/user_settings/defs/native/AccountAgeGroupNonAdultSetting.tsx
import util from "../../../../intl/index.native.tsx";
import AgeVerificationUtils from "../../../age_assurance/AgeVerificationUtils.tsx";
import RegionalFeatureConfigUtils from "../../../regional_feature_config/RegionalFeatureConfigUtils.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import AgeVerificationActionCreatorsDefault from "../../../age_assurance/AgeVerificationActionCreators.native.tsx";
import AgeVerificationAnalyticsUtils from "../../../age_assurance/AgeVerificationAnalyticsUtils.tsx";
import TinyBroncoSettingsPredicate from "../../../tiny_bronco/native/TinyBroncoSettingsPredicate.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["/52UYy"]);
  },
  parent: SettingsConstants.MobileUserSettings.ACCOUNT,
  useTrailing: function useAccountAgeGroupNonAdultSettingTrailing() {
    const isAgeVerified = AgeVerificationUtils.useIsAgeVerified();
    const intl = util.intl;
    let stringResult = intl.string(util.t.lKDPGA);
    if (isAgeVerified) {
      const intl2 = tmp(1114).intl;
      stringResult = intl2.string(tmp(1114).t.sK0dmH);
    }
    return stringResult;
  },
  onPress: function onAccountAgeGroupNonAdultSettingPress() {
    const obj = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.ACCOUNT_AGE_GROUP };
    const result = obj.showAgeVerificationGetStartedModal(obj);
  },
  withArrow: true,
  usePredicate: function AccountAgeGroupNonAdultSettingPredicate() {
    const isAgeVerified = AgeVerificationUtils.useIsAgeVerified();
    const isVerifiedTeen = AgeVerificationUtils.useIsVerifiedTeen();
    let hasTeenDefaults = RegionalFeatureConfigUtils.useHasTeenDefaults();
    const isTinyBroncoSettingsEnabled = TinyBroncoSettingsPredicate.useIsTinyBroncoSettingsEnabled();
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
  },
});
let result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountAgeGroupNonAdultSetting.tsx");

export default pressable;
