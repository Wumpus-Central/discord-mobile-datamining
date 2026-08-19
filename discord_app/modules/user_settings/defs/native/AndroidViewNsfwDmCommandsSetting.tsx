// === Module 14197: toggle ===

// Module 14197 (toggle)
import obj132 from "obj132" /* 2 */;
import obj1322 from "obj132" /* 500 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4066 */;
import useAgeVerificationRunner from "useAgeVerificationRunner" /* 4992 */;
import shouldShowAgeGateForVoiceChannel from "shouldShowAgeGateForVoiceChannel" /* 5252 */;
import AgeVerificationModalEntryPoint from "AgeVerificationModalEntryPoint" /* 5254 */;
import openIncodeAgeVerificationModalDefault from "openIncodeAgeVerificationModal" /* 5428 */;
import MobileUserSettings from "MobileUserSettings" /* 8198 */;
import resolveNsfwTogglesWithDefaults from "resolveNsfwTogglesWithDefaults" /* 8454 */;
import useNSFWAllowed from "useNSFWAllowed" /* 8455 */;
import createToggle from "createToggle" /* 10669 */;

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