// discord_app/modules/user_settings/defs/native/AccountAgeGroupAdultSetting.tsx
import intl2 from "../../../../intl/index.native.tsx";
import AgeVerificationUtils from "../../../age_assurance/AgeVerificationUtils.tsx";
import RegionalFeatureConfigUtils from "../../../regional_feature_config/RegionalFeatureConfigUtils.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import TinyBroncoSettingsPredicate from "../../../tiny_bronco/native/TinyBroncoSettingsPredicate.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const obj = AgeVerificationUtils;
      const isAgeVerified = obj.useIsAgeVerified();
      const obj2 = AgeVerificationUtils;
      const isVerifiedTeen = obj2.useIsVerifiedTeen();
      const obj3 = RegionalFeatureConfigUtils;
      let hasAgeGatedFeatures = obj3.useHasAgeGatedFeatures();
      const obj4 = TinyBroncoSettingsPredicate;
      const isTinyBroncoSettingsEnabled = obj4.useIsTinyBroncoSettingsEnabled();
      if (hasAgeGatedFeatures) {
        hasAgeGatedFeatures = isAgeVerified;
      }
      if (hasAgeGatedFeatures) {
        hasAgeGatedFeatures = !isVerifiedTeen;
      }
      if (hasAgeGatedFeatures) {
        hasAgeGatedFeatures = !isTinyBroncoSettingsEnabled;
      }
      return hasAgeGatedFeatures;
    }
  : () => {
      const obj = AgeVerificationUtils;
      const isAgeVerified = obj.useIsAgeVerified();
      const obj2 = AgeVerificationUtils;
      const isVerifiedTeen = obj2.useIsVerifiedTeen();
      const obj3 = RegionalFeatureConfigUtils;
      let hasAgeGatedFeatures = obj3.useHasAgeGatedFeatures();
      const obj4 = TinyBroncoSettingsPredicate;
      const isTinyBroncoSettingsEnabled = obj4.useIsTinyBroncoSettingsEnabled();
      if (hasAgeGatedFeatures) {
        hasAgeGatedFeatures = isAgeVerified;
      }
      if (hasAgeGatedFeatures) {
        hasAgeGatedFeatures = !isVerifiedTeen;
      }
      if (hasAgeGatedFeatures) {
        hasAgeGatedFeatures = !isTinyBroncoSettingsEnabled;
      }
      return hasAgeGatedFeatures;
    };
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["/52UYy"]);
  },
  parent: MobileUserSettings.ACCOUNT,
  useTrailing() {
    const intl = intl2.intl;
    return intl.string(intl2.t.XxRj7f);
  },
  usePredicate: tmp2,
};
const createStaticResult = SettingBuilders.createStatic(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountAgeGroupAdultSetting.tsx");

export default createStaticResult;
