// discord_app/modules/user_settings/defs/native/AndroidViewNsfwDmCommandsSetting.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import obj1322 from "../../../../utils/PlatformUtils.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import explicitContentFromProto from "../../UserSettings.tsx";
import useAgeVerificationRunner from "../../../age_assurance/AgeVerificationUtils.tsx";
import shouldShowAgeGateForVoiceChannel from "../../../age_gate/AgeGateUtils.tsx";
import AgeVerificationModalEntryPoint from "../../../age_assurance/AgeVerificationAnalyticsUtils.tsx";
import openIncodeAgeVerificationModalDefault from "../../../age_assurance/AgeVerificationActionCreators.native.tsx";
import MobileUserSettings from "../../core/native/SettingsConstants.tsx";
import resolveNsfwTogglesWithDefaults from "../../content_and_social/AgeRestrictedContentSettingsUtils.tsx";
import useNSFWAllowed from "../../content_and_social/useNSFWAllowed.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.VGWIAo);
  },
  useDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["J4zza/"]);
  },
  parent: MobileUserSettings.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: function useViewNsfwDmCommandsSettingValue() {
    return resolveNsfwTogglesWithDefaults.useViewNsfwCommandsOrDefault();
  },
  onValueChange: function handleValueChange(arg0) {
    let obj = shouldShowAgeGateForVoiceChannel;
    if (obj.shouldAgeVerifyForSettingsToggles()) {
      if (arg0) {
        obj = { entryPoint: null };
        obj[0] = AgeVerificationModalEntryPoint.AgeVerificationModalEntryPoint.AGE_RESTRICTED_DM_COMMANDS_SETTINGS;
        const result = openIncodeAgeVerificationModalDefault.showAgeVerificationGetStartedModal(obj);
      }
    }
    const ViewNsfwCommands = explicitContentFromProto.ViewNsfwCommands;
    ViewNsfwCommands.updateSetting(arg0);
  },
  usePredicate() {
    let shouldAgeVerifyForSettingsToggles = shouldShowAgeGateForVoiceChannel.useShouldAgeVerifyForSettingsToggles();
    let flag = useNSFWAllowed.useNSFWAllowed();
    if (flag == null) {
      flag = true;
    }
    let tmpResult = useAgeVerificationRunner;
    if (shouldAgeVerifyForSettingsToggles) {
      shouldAgeVerifyForSettingsToggles = !tmpResult.useIsVerifiedTeen();
    }
    if (!shouldAgeVerifyForSettingsToggles) {
      shouldAgeVerifyForSettingsToggles = flag;
    }
    if (shouldAgeVerifyForSettingsToggles) {
      tmpResult = obj1322;
      shouldAgeVerifyForSettingsToggles = tmpResult.isAndroid();
    }
    return shouldAgeVerifyForSettingsToggles;
  }
});
let result = obj132.fileFinishedImporting("modules/user_settings/defs/native/AndroidViewNsfwDmCommandsSetting.tsx");

export default toggle;
export const AndroidViewNsfwDmCommandsSettingV2 = toggle;