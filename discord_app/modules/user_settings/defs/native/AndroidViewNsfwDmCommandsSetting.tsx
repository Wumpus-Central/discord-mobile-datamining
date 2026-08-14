// discord_app/modules/user_settings/defs/native/AndroidViewNsfwDmCommandsSetting.tsx
import createToggle from "createToggle";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { openIncodeAgeVerificationModal } from "../../../age_assurance/AgeVerificationActionCreators.native.tsx";
import { shouldShowAgeGateForVoiceChannel } from "../../../age_gate/AgeGateUtils.tsx";
import { resolveNsfwTogglesWithDefaults } from "../../content_and_social/AgeRestrictedContentSettingsUtils.tsx";
import { useNSFWAllowed } from "../../content_and_social/useNSFWAllowed.tsx";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.VGWIAo);
  },
  useDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["J4zza/"]);
  },
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  useValue: function useViewNsfwDmCommandsSettingValue() {
    return resolveNsfwTogglesWithDefaults.useViewNsfwCommandsOrDefault();
  },
  onValueChange: function handleValueChange(arg0) {
    let obj = shouldShowAgeGateForVoiceChannel;
    if (obj.shouldAgeVerifyForSettingsToggles()) {
      if (arg0) {
        obj = { entryPoint: null };
        obj[0] = tmp(7865).AgeVerificationModalEntryPoint.AGE_RESTRICTED_DM_COMMANDS_SETTINGS;
        const result = openIncodeAgeVerificationModal.showAgeVerificationGetStartedModal(obj);
        const obj2 = openIncodeAgeVerificationModal;
      }
    }
    const ViewNsfwCommands = tmp(4034).ViewNsfwCommands;
    ViewNsfwCommands.updateSetting(arg0);
  },
  usePredicate() {
    let shouldAgeVerifyForSettingsToggles = shouldShowAgeGateForVoiceChannel.useShouldAgeVerifyForSettingsToggles();
    const obj = shouldShowAgeGateForVoiceChannel;
    let flag = useNSFWAllowed.useNSFWAllowed();
    if (flag == null) {
      flag = true;
    }
    let tmpResult = tmp(4582);
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
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  useValue: function useViewNsfwDmCommandsSettingValue() {
    return resolveNsfwTogglesWithDefaults.useViewNsfwCommandsOrDefault();
  },
  onValueChange: function handleValueChange(arg0) {
    let obj = shouldShowAgeGateForVoiceChannel;
    if (obj.shouldAgeVerifyForSettingsToggles()) {
      if (arg0) {
        obj = { entryPoint: null };
        obj[0] = tmp(7865).AgeVerificationModalEntryPoint.AGE_RESTRICTED_DM_COMMANDS_SETTINGS;
        const result = openIncodeAgeVerificationModal.showAgeVerificationGetStartedModal(obj);
        const obj2 = openIncodeAgeVerificationModal;
      }
    }
    const ViewNsfwCommands = tmp(4034).ViewNsfwCommands;
    ViewNsfwCommands.updateSetting(arg0);
  },
  usePredicate() {
    let shouldAgeVerifyForSettingsToggles = shouldShowAgeGateForVoiceChannel.useShouldAgeVerifyForSettingsToggles();
    const obj = shouldShowAgeGateForVoiceChannel;
    let flag = useNSFWAllowed.useNSFWAllowed();
    if (flag == null) {
      flag = true;
    }
    let tmpResult = tmp(4582);
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
let result = require("shouldShowAgeGateForVoiceChannel").fileFinishedImporting("modules/user_settings/defs/native/AndroidViewNsfwDmCommandsSetting.tsx");

export default toggle;
export const AndroidViewNsfwDmCommandsSettingV2 = toggle;