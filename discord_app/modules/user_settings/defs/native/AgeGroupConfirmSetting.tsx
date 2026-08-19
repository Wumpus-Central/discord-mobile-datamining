// === Module 14129: pressable ===

// Module 14129 (pressable)
import obj132 from "obj132" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 2853 */;
import useAgeVerificationRunner from "useAgeVerificationRunner" /* 4992 */;
import AgeVerificationModalEntryPoint from "AgeVerificationModalEntryPoint" /* 5254 */;
import openIncodeAgeVerificationModalDefault from "openIncodeAgeVerificationModal" /* 5428 */;
import MobileUserSettings from "MobileUserSettings" /* 8198 */;
import createToggle from "createToggle" /* 10669 */;

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