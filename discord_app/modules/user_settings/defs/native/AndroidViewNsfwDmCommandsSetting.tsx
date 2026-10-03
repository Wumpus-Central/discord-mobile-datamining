// discord_app/modules/user_settings/defs/native/AndroidViewNsfwDmCommandsSetting.tsx
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import UserSettings from "../../UserSettings.tsx";
import AgeGateUtils from "../../../age_gate/AgeGateUtils.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import AgeVerificationActionCreatorsDefault from "../../../age_assurance/AgeVerificationActionCreators.native.tsx";
import AgeVerificationAnalyticsUtils from "../../../age_assurance/AgeVerificationAnalyticsUtils.tsx";
import AgeRestrictedContentSettingsUtils from "../../content_and_social/AgeRestrictedContentSettingsUtils.tsx";
import useNSFWAllowed from "../../content_and_social/useNSFWAllowed.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const PlatformUtils = tmp(1369);
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
let ReactCompilerGating = ReactCompilerGating_mod;
const fn = () => AgeRestrictedContentSettingsUtils.useViewNsfwCommandsOrDefault();
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp = require;
      let isAndroid = dependencyMap;
      const cResult = c.c(3);
      const shouldAgeVerifyForSettingsToggles = AgeGateUtils.useShouldAgeVerifyForSettingsToggles();
      let flag = useNSFWAllowed.useNSFWAllowed();
      if (flag == null) {
        flag = true;
      }
      if (shouldAgeVerifyForSettingsToggles) {
        if (!tmpResult.useIsVerifiedTeen()) {
          const _Symbol = Symbol;
          if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
            const isAndroidResult = PlatformUtils.isAndroid();
            cResult[0] = isAndroidResult;
            let first = isAndroidResult;
            const tmpResult2 = PlatformUtils;
          } else {
            first = cResult[0];
          }
          return first;
        }
      }
      if (cResult[1] !== flag) {
        let isAndroidResult1 = flag;
        if (flag) {
          tmp = PlatformUtils;
          isAndroid = tmp.isAndroid;
          isAndroidResult1 = isAndroid();
        }
        cResult[1] = flag;
        cResult[2] = isAndroidResult1;
      }
    }
  : () => {
      let shouldAgeVerifyForSettingsToggles = AgeGateUtils.useShouldAgeVerifyForSettingsToggles();
      let flag = useNSFWAllowed.useNSFWAllowed();
      if (flag == null) {
        flag = true;
      }
      if (shouldAgeVerifyForSettingsToggles) {
        shouldAgeVerifyForSettingsToggles = !tmpResult.useIsVerifiedTeen();
      }
      if (!shouldAgeVerifyForSettingsToggles) {
        shouldAgeVerifyForSettingsToggles = flag;
      }
      if (shouldAgeVerifyForSettingsToggles) {
        shouldAgeVerifyForSettingsToggles = PlatformUtils.isAndroid();
        const tmpResult2 = PlatformUtils;
      }
      return shouldAgeVerifyForSettingsToggles;
    };
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.VGWIAo);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(util.t["J4zza/"]);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: fn,
  onValueChange: function handleValueChange(arg0) {
    if (obj.shouldAgeVerifyForSettingsToggles()) {
      if (arg0) {
        const obj3 = {
          entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.AGE_RESTRICTED_DM_COMMANDS_SETTINGS,
        };
        const result = AgeVerificationActionCreatorsDefault.showAgeVerificationGetStartedModal(obj3);
      }
    }
    const ViewNsfwCommands = UserSettings.ViewNsfwCommands;
    ViewNsfwCommands.updateSetting(arg0);
    obj = AgeGateUtils;
  },
  usePredicate: ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        let tmp = require;
        let isAndroid = dependencyMap;
        const cResult = c.c(3);
        const shouldAgeVerifyForSettingsToggles = AgeGateUtils.useShouldAgeVerifyForSettingsToggles();
        let flag = useNSFWAllowed.useNSFWAllowed();
        if (flag == null) {
          flag = true;
        }
        if (shouldAgeVerifyForSettingsToggles) {
          if (!tmpResult.useIsVerifiedTeen()) {
            const _Symbol = Symbol;
            if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
              const isAndroidResult = PlatformUtils.isAndroid();
              cResult[0] = isAndroidResult;
              let first = isAndroidResult;
              const tmpResult2 = PlatformUtils;
            } else {
              first = cResult[0];
            }
            return first;
          }
        }
        if (cResult[1] !== flag) {
          let isAndroidResult1 = flag;
          if (flag) {
            tmp = PlatformUtils;
            isAndroid = tmp.isAndroid;
            isAndroidResult1 = isAndroid();
          }
          cResult[1] = flag;
          cResult[2] = isAndroidResult1;
        }
      }
    : () => {
        let shouldAgeVerifyForSettingsToggles = AgeGateUtils.useShouldAgeVerifyForSettingsToggles();
        let flag = useNSFWAllowed.useNSFWAllowed();
        if (flag == null) {
          flag = true;
        }
        if (shouldAgeVerifyForSettingsToggles) {
          shouldAgeVerifyForSettingsToggles = !tmpResult.useIsVerifiedTeen();
        }
        if (!shouldAgeVerifyForSettingsToggles) {
          shouldAgeVerifyForSettingsToggles = flag;
        }
        if (shouldAgeVerifyForSettingsToggles) {
          shouldAgeVerifyForSettingsToggles = PlatformUtils.isAndroid();
          const tmpResult2 = PlatformUtils;
        }
        return shouldAgeVerifyForSettingsToggles;
      },
});
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/AndroidViewNsfwDmCommandsSetting.tsx");

export default toggle;
export const AndroidViewNsfwDmCommandsSettingV2 = toggle;
