// === Module 14295: toggle ===

// Module 14295 (toggle)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import shouldShowAgeGateForVoiceChannel from "shouldShowAgeGateForVoiceChannel" /* 4619 */;
import openIncodeAgeVerificationModalDefault from "openIncodeAgeVerificationModal" /* 7942 */;
import MobileUserSettings from "MobileUserSettings" /* 8235 */;
import resolveNsfwTogglesWithDefaults from "resolveNsfwTogglesWithDefaults" /* 8500 */;
import useNSFWAllowed from "useNSFWAllowed" /* 8501 */;
import createToggle from "createToggle" /* 10516 */;

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
        obj[0] = tmp(7944).AgeVerificationModalEntryPoint.AGE_RESTRICTED_DM_COMMANDS_SETTINGS;
        const result = openIncodeAgeVerificationModalDefault.showAgeVerificationGetStartedModal(obj);
        const obj2 = openIncodeAgeVerificationModalDefault;
      }
    }
    const ViewNsfwCommands = tmp(4070).ViewNsfwCommands;
    ViewNsfwCommands.updateSetting(arg0);
  },
  usePredicate() {
    let shouldAgeVerifyForSettingsToggles = shouldShowAgeGateForVoiceChannel.useShouldAgeVerifyForSettingsToggles();
    const obj = shouldShowAgeGateForVoiceChannel;
    let flag = useNSFWAllowed.useNSFWAllowed();
    if (flag == null) {
      flag = true;
    }
    let tmpResult = tmp(4621);
    if (shouldAgeVerifyForSettingsToggles) {
      shouldAgeVerifyForSettingsToggles = !tmpResult.useIsVerifiedTeen();
    }
    if (!shouldAgeVerifyForSettingsToggles) {
      shouldAgeVerifyForSettingsToggles = flag;
    }
    if (shouldAgeVerifyForSettingsToggles) {
      tmpResult = tmp(500);
      shouldAgeVerifyForSettingsToggles = tmpResult.isAndroid();
    }
    return shouldAgeVerifyForSettingsToggles;
  }
});
let obj = {
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
        obj[0] = tmp(7944).AgeVerificationModalEntryPoint.AGE_RESTRICTED_DM_COMMANDS_SETTINGS;
        const result = openIncodeAgeVerificationModalDefault.showAgeVerificationGetStartedModal(obj);
        const obj2 = openIncodeAgeVerificationModalDefault;
      }
    }
    const ViewNsfwCommands = tmp(4070).ViewNsfwCommands;
    ViewNsfwCommands.updateSetting(arg0);
  },
  usePredicate() {
    let shouldAgeVerifyForSettingsToggles = shouldShowAgeGateForVoiceChannel.useShouldAgeVerifyForSettingsToggles();
    const obj = shouldShowAgeGateForVoiceChannel;
    let flag = useNSFWAllowed.useNSFWAllowed();
    if (flag == null) {
      flag = true;
    }
    let tmpResult = tmp(4621);
    if (shouldAgeVerifyForSettingsToggles) {
      shouldAgeVerifyForSettingsToggles = !tmpResult.useIsVerifiedTeen();
    }
    if (!shouldAgeVerifyForSettingsToggles) {
      shouldAgeVerifyForSettingsToggles = flag;
    }
    if (shouldAgeVerifyForSettingsToggles) {
      tmpResult = tmp(500);
      shouldAgeVerifyForSettingsToggles = tmpResult.isAndroid();
    }
    return shouldAgeVerifyForSettingsToggles;
  }
};
let result = set.fileFinishedImporting("modules/user_settings/defs/native/AndroidViewNsfwDmCommandsSetting.tsx");

export default toggle;
export const AndroidViewNsfwDmCommandsSettingV2 = toggle;