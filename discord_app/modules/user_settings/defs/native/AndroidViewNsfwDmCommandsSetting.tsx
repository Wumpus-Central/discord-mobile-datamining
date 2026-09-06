// discord_app/modules/user_settings/defs/native/AndroidViewNsfwDmCommandsSetting.tsx
import util from "../../../../intl/index.native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import UserSettings from "../../UserSettings.tsx";
import AgeGateUtils from "../../../age_gate/AgeGateUtils.tsx";
import AgeVerificationUtils from "../../../age_assurance/AgeVerificationUtils.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import AgeVerificationActionCreatorsDefault from "../../../age_assurance/AgeVerificationActionCreators.native.tsx";
import AgeVerificationAnalyticsUtils from "../../../age_assurance/AgeVerificationAnalyticsUtils.tsx";
import AgeRestrictedContentSettingsUtils from "../../content_and_social/AgeRestrictedContentSettingsUtils.tsx";
import useNSFWAllowed from "../../content_and_social/useNSFWAllowed.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

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
  useValue: function useViewNsfwDmCommandsSettingValue() {
    return AgeRestrictedContentSettingsUtils.useViewNsfwCommandsOrDefault();
  },
  onValueChange: function handleValueChange(arg0) {
    let obj = AgeGateUtils;
    if (obj.shouldAgeVerifyForSettingsToggles()) {
      if (arg0) {
        obj = {
          entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.AGE_RESTRICTED_DM_COMMANDS_SETTINGS,
        };
        const result = AgeVerificationActionCreatorsDefault.showAgeVerificationGetStartedModal(obj);
      }
    }
    const ViewNsfwCommands = UserSettings.ViewNsfwCommands;
    ViewNsfwCommands.updateSetting(arg0);
  },
  usePredicate() {
    let shouldAgeVerifyForSettingsToggles = AgeGateUtils.useShouldAgeVerifyForSettingsToggles();
    let flag = useNSFWAllowed.useNSFWAllowed();
    if (flag == null) {
      flag = true;
    }
    let tmpResult = AgeVerificationUtils;
    if (shouldAgeVerifyForSettingsToggles) {
      shouldAgeVerifyForSettingsToggles = !tmpResult.useIsVerifiedTeen();
    }
    if (!shouldAgeVerifyForSettingsToggles) {
      shouldAgeVerifyForSettingsToggles = flag;
    }
    if (shouldAgeVerifyForSettingsToggles) {
      tmpResult = PlatformUtils;
      shouldAgeVerifyForSettingsToggles = tmpResult.isAndroid();
    }
    return shouldAgeVerifyForSettingsToggles;
  },
});
let result = size.fileFinishedImporting("modules/user_settings/defs/native/AndroidViewNsfwDmCommandsSetting.tsx");

export default toggle;
export const AndroidViewNsfwDmCommandsSettingV2 = toggle;
