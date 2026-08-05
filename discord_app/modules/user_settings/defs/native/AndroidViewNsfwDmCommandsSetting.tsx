// discord_app/modules/user_settings/defs/native/AndroidViewNsfwDmCommandsSetting.tsx
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.VGWIAo);
  },
  useDescription() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["J4zza/"]);
  },
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  useValue: function useViewNsfwDmCommandsSettingValue() {
    return require("../../content_and_social/AgeRestrictedContentSettingsUtils.tsx") /* resolveNsfwTogglesWithDefaults */.useViewNsfwCommandsOrDefault();
  },
  onValueChange: function handleValueChange(arg0) {
    let obj = require("../../../age_gate/AgeGateUtils.tsx") /* shouldShowAgeGateForVoiceChannel */;
    if (obj.shouldAgeVerifyForSettingsToggles()) {
      if (arg0) {
        obj = { entryPoint: null };
        obj[0] = tmp(7722).AgeVerificationModalEntryPoint.AGE_RESTRICTED_DM_COMMANDS_SETTINGS;
        const result = require("../../../age_assurance/AgeVerificationActionCreators.native.tsx").showAgeVerificationGetStartedModal(obj);
        const obj2 = require("../../../age_assurance/AgeVerificationActionCreators.native.tsx");
      }
    }
    const ViewNsfwCommands = tmp(3958).ViewNsfwCommands;
    ViewNsfwCommands.updateSetting(arg0);
  },
  usePredicate() {
    let shouldAgeVerifyForSettingsToggles = require("../../../age_gate/AgeGateUtils.tsx") /* shouldShowAgeGateForVoiceChannel */.useShouldAgeVerifyForSettingsToggles();
    const obj = require("../../../age_gate/AgeGateUtils.tsx") /* shouldShowAgeGateForVoiceChannel */;
    let flag = require("../../content_and_social/useNSFWAllowed.tsx") /* useNSFWAllowed */.useNSFWAllowed();
    if (flag == null) {
      flag = true;
    }
    let tmpResult = tmp(4500);
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
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.VGWIAo);
  },
  useDescription() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["J4zza/"]);
  },
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  useValue: function useViewNsfwDmCommandsSettingValue() {
    return require("../../content_and_social/AgeRestrictedContentSettingsUtils.tsx") /* resolveNsfwTogglesWithDefaults */.useViewNsfwCommandsOrDefault();
  },
  onValueChange: function handleValueChange(arg0) {
    let obj = require("../../../age_gate/AgeGateUtils.tsx") /* shouldShowAgeGateForVoiceChannel */;
    if (obj.shouldAgeVerifyForSettingsToggles()) {
      if (arg0) {
        obj = { entryPoint: null };
        obj[0] = tmp(7722).AgeVerificationModalEntryPoint.AGE_RESTRICTED_DM_COMMANDS_SETTINGS;
        const result = require("../../../age_assurance/AgeVerificationActionCreators.native.tsx").showAgeVerificationGetStartedModal(obj);
        const obj2 = require("../../../age_assurance/AgeVerificationActionCreators.native.tsx");
      }
    }
    const ViewNsfwCommands = tmp(3958).ViewNsfwCommands;
    ViewNsfwCommands.updateSetting(arg0);
  },
  usePredicate() {
    let shouldAgeVerifyForSettingsToggles = require("../../../age_gate/AgeGateUtils.tsx") /* shouldShowAgeGateForVoiceChannel */.useShouldAgeVerifyForSettingsToggles();
    const obj = require("../../../age_gate/AgeGateUtils.tsx") /* shouldShowAgeGateForVoiceChannel */;
    let flag = require("../../content_and_social/useNSFWAllowed.tsx") /* useNSFWAllowed */.useNSFWAllowed();
    if (flag == null) {
      flag = true;
    }
    let tmpResult = tmp(4500);
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