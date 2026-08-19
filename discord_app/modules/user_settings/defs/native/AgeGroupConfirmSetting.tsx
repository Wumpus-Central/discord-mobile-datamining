// discord_app/modules/user_settings/defs/native/AgeGroupConfirmSetting.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import getSystemLocale from "../../../../intl/index.native.tsx";
import messagesProxyDefault from "../../../age_assurance/AgeAssurance.messages.js";
import useAgeVerificationRunner from "../../../age_assurance/AgeVerificationUtils.tsx";
import AgeVerificationModalEntryPoint from "../../../age_assurance/AgeVerificationAnalyticsUtils.tsx";
import openIncodeAgeVerificationModalDefault from "../../../age_assurance/AgeVerificationActionCreators.native.tsx";
import MobileUserSettings from "../../core/native/SettingsConstants.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";

const pressable = createToggle.createPressable({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.SH6Tcv);
  },
  parent: MobileUserSettings.MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT,
  useDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.rJiO86);
  },
  onPress: function onAgeGroupConfirmPress() {
    const obj = { entryPoint: AgeVerificationModalEntryPoint.AgeVerificationModalEntryPoint.ACCOUNT_AGE_GROUP };
    const result = obj.showAgeVerificationGetStartedModal(obj);
  },
  withArrow: true,
  usePredicate: useAgeVerificationRunner.useShowAssignedAgeGroupSettings
});
let result = obj132.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupConfirmSetting.tsx");

export default pressable;