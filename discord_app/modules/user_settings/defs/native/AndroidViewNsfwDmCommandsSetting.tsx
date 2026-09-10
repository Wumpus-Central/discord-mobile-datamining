// === Module 14918: AndroidViewNsfwDmCommandsSetting ===

// Module 14918 (AndroidViewNsfwDmCommandsSetting)
import util from "util" /* 1114 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import UserSettings from "UserSettings" /* 1935 */;
import AgeGateUtils from "AgeGateUtils" /* 4816 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 4818 */;
import SettingsConstants from "SettingsConstants" /* 8027 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8476 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8478 */;
import AgeRestrictedContentSettingsUtils from "AgeRestrictedContentSettingsUtils" /* 9365 */;
import useNSFWAllowed from "useNSFWAllowed" /* 9366 */;
import SettingBuilders from "SettingBuilders" /* 11540 */;
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
    let obj = AgeGateUtils;
    if (obj.shouldAgeVerifyForSettingsToggles()) {
      if (arg0) {
        obj = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.AGE_RESTRICTED_DM_COMMANDS_SETTINGS };
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
  }
});
let result = size.fileFinishedImporting("modules/user_settings/defs/native/AndroidViewNsfwDmCommandsSetting.tsx");

export default toggle;
export const AndroidViewNsfwDmCommandsSettingV2 = toggle;