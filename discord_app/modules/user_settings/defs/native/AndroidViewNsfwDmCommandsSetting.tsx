// discord_app/modules/user_settings/defs/native/AndroidViewNsfwDmCommandsSetting.tsx
import react from "../../../../../_runtime/00576_react.js";
import intl2 from "../../../../intl/index.native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import UserSettings from "../../UserSettings.tsx";
import AgeGateUtils from "../../../age_gate/AgeGateUtils.tsx";
import AgeVerificationUtils from "../../../age_assurance/AgeVerificationUtils.tsx";
import AgeRestrictedContentSettingsUtils from "../../content_and_social/AgeRestrictedContentSettingsUtils.tsx";
import useNSFWAllowed from "../../content_and_social/useNSFWAllowed.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import AgeVerificationActionCreatorsDefault from "../../../age_assurance/AgeVerificationActionCreators.native.tsx";
import AgeVerificationAnalyticsUtils from "../../../age_assurance/AgeVerificationAnalyticsUtils.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
const fn = () => {
  const obj = AgeRestrictedContentSettingsUtils;
  return obj.useViewNsfwCommandsOrDefault();
};
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp8;
      const obj = react;
      const cResult = obj.c(3);
      const obj2 = AgeGateUtils;
      const shouldAgeVerifyForSettingsToggles = obj2.useShouldAgeVerifyForSettingsToggles();
      const obj3 = useNSFWAllowed;
      let flag = obj3.useNSFWAllowed();
      if (flag == null) {
        flag = true;
      }
      const tmpResult = AgeVerificationUtils;
      if (shouldAgeVerifyForSettingsToggles) {
        let first;
        if (!tmpResult.useIsVerifiedTeen()) {
          const _Symbol = Symbol;
          if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
            const tmpResult3 = PlatformUtils;
            const isAndroidResult = tmpResult3.isAndroid();
            cResult[0] = isAndroidResult;
            first = isAndroidResult;
          } else {
            first = cResult[0];
          }
        }
        return first;
      }
      if (cResult[1] !== flag) {
        let isAndroidResult1 = flag;
        if (isAndroidResult1) {
          const tmpResult4 = PlatformUtils;
          isAndroidResult1 = tmpResult4.isAndroid();
        }
        cResult[1] = flag;
        cResult[2] = isAndroidResult1;
        tmp8 = isAndroidResult1;
      } else {
        tmp8 = cResult[2];
      }
      first = tmp8;
    }
  : () => {
      const obj = AgeGateUtils;
      let shouldAgeVerifyForSettingsToggles = obj.useShouldAgeVerifyForSettingsToggles();
      const obj2 = useNSFWAllowed;
      let flag = obj2.useNSFWAllowed();
      if (flag == null) {
        flag = true;
      }
      const tmpResult = AgeVerificationUtils;
      if (shouldAgeVerifyForSettingsToggles) {
        shouldAgeVerifyForSettingsToggles = !tmpResult.useIsVerifiedTeen();
      }
      if (!shouldAgeVerifyForSettingsToggles) {
        shouldAgeVerifyForSettingsToggles = flag;
      }
      if (shouldAgeVerifyForSettingsToggles) {
        const tmpResult2 = PlatformUtils;
        shouldAgeVerifyForSettingsToggles = tmpResult2.isAndroid();
      }
      return shouldAgeVerifyForSettingsToggles;
    };
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.VGWIAo);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(intl2.t["J4zza/"]);
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: fn,
  onValueChange: function handleValueChange(arg0) {
    const obj = AgeGateUtils;
    if (obj.shouldAgeVerifyForSettingsToggles()) {
      if (arg0) {
        const obj2 = {
          entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.AGE_RESTRICTED_DM_COMMANDS_SETTINGS,
        };
        const showAgeVerificationGetStartedModal =
          AgeVerificationActionCreatorsDefault.showAgeVerificationGetStartedModal;
        AgeVerificationActionCreatorsDefault;
        const result = showAgeVerificationGetStartedModal(obj2);
      }
    }
    const ViewNsfwCommands = UserSettings.ViewNsfwCommands;
    ViewNsfwCommands.updateSetting(arg0);
  },
  usePredicate: tmp3,
};
const toggle = SettingBuilders.createToggle(obj);
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/AndroidViewNsfwDmCommandsSetting.tsx");

export default toggle;
export const AndroidViewNsfwDmCommandsSettingV2 = toggle;
