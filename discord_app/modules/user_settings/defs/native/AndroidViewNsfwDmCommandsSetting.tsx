// === Module 14930: AndroidViewNsfwDmCommandsSetting ===

// Module 14930 (AndroidViewNsfwDmCommandsSetting)
import util from "util" /* 1114 */;
import PlatformUtils from "PlatformUtils" /* 1363 */;
import UserSettings from "UserSettings" /* 1935 */;
import AgeGateUtils from "AgeGateUtils" /* 4847 */;
import SettingsConstants from "SettingsConstants" /* 8079 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8529 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8531 */;
import AgeRestrictedContentSettingsUtils from "AgeRestrictedContentSettingsUtils" /* 9425 */;
import useNSFWAllowed from "useNSFWAllowed" /* 9426 */;
import SettingBuilders from "SettingBuilders" /* 11602 */;
import size from "module_2" /* 2 */;

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
    if (obj.shouldAgeVerifyForSettingsToggles()) {
      if (arg0) {
        const obj3 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.AGE_RESTRICTED_DM_COMMANDS_SETTINGS };
        const result = AgeVerificationActionCreatorsDefault.showAgeVerificationGetStartedModal(obj3);
      }
    }
    const ViewNsfwCommands = UserSettings.ViewNsfwCommands;
    ViewNsfwCommands.updateSetting(arg0);
    obj = AgeGateUtils;
  },
  usePredicate() {
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
  }
});
let result = size.fileFinishedImporting("modules/user_settings/defs/native/AndroidViewNsfwDmCommandsSetting.tsx");

export default toggle;
export const AndroidViewNsfwDmCommandsSettingV2 = toggle;