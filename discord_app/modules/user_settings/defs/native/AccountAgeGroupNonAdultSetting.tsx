// discord_app/modules/user_settings/defs/native/AccountAgeGroupNonAdultSetting.tsx
import react from "../../../../../_runtime/00576_react.js";
import intl3 from "../../../../intl/index.native.tsx";
import AgeVerificationUtils from "../../../age_assurance/AgeVerificationUtils.tsx";
import RegionalFeatureConfigUtils from "../../../regional_feature_config/RegionalFeatureConfigUtils.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import AgeVerificationActionCreatorsDefault from "../../../age_assurance/AgeVerificationActionCreators.native.tsx";
import AgeVerificationAnalyticsUtils from "../../../age_assurance/AgeVerificationAnalyticsUtils.tsx";
import TinyBroncoSettingsPredicate from "../../../tiny_bronco/native/TinyBroncoSettingsPredicate.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let tmp7;
      const obj = react;
      const cResult = obj.c(3);
      const obj2 = AgeVerificationUtils;
      const isAgeVerified = obj2.useIsAgeVerified();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl3.intl;
        const stringResult = intl.string(intl3.t.lKDPGA);
        cResult[0] = stringResult;
        first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== isAgeVerified) {
        if (isAgeVerified) {
          const intl2 = intl3.intl;
          first = intl2.string(intl3.t.sK0dmH);
        }
        cResult[1] = isAgeVerified;
        cResult[2] = first;
        tmp7 = first;
      } else {
        tmp7 = cResult[2];
      }
      return tmp7;
    }
  : () => {
      const obj = AgeVerificationUtils;
      const isAgeVerified = obj.useIsAgeVerified();
      const intl = intl3.intl;
      let stringResult = intl.string(intl3.t.lKDPGA);
      if (isAgeVerified) {
        const intl2 = intl3.intl;
        stringResult = intl2.string(intl3.t.sK0dmH);
      }
      return stringResult;
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const obj = AgeVerificationUtils;
      const isAgeVerified = obj.useIsAgeVerified();
      const obj2 = AgeVerificationUtils;
      const isVerifiedTeen = obj2.useIsVerifiedTeen();
      const obj3 = RegionalFeatureConfigUtils;
      let hasTeenDefaults = obj3.useHasTeenDefaults();
      const obj4 = TinyBroncoSettingsPredicate;
      const isTinyBroncoSettingsEnabled = obj4.useIsTinyBroncoSettingsEnabled();
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
  : () => {
      const obj = AgeVerificationUtils;
      const isAgeVerified = obj.useIsAgeVerified();
      const obj2 = AgeVerificationUtils;
      const isVerifiedTeen = obj2.useIsVerifiedTeen();
      const obj3 = RegionalFeatureConfigUtils;
      let hasTeenDefaults = obj3.useHasTeenDefaults();
      const obj4 = TinyBroncoSettingsPredicate;
      const isTinyBroncoSettingsEnabled = obj4.useIsTinyBroncoSettingsEnabled();
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
    };
let obj = {
  useTitle() {
    const intl = intl3.intl;
    return intl.string(intl3.t["/52UYy"]);
  },
  parent: MobileUserSettings.ACCOUNT,
  useTrailing: tmp2,
  onPress: function onAccountAgeGroupNonAdultSettingPress() {
    const obj = AgeVerificationActionCreatorsDefault;
    const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.ACCOUNT_AGE_GROUP };
    const result = obj.showAgeVerificationGetStartedModal(obj2);
  },
  withArrow: true,
  usePredicate: tmp3,
};
const pressable = SettingBuilders.createPressable(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountAgeGroupNonAdultSetting.tsx");

export default pressable;
