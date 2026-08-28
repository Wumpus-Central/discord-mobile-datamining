// === Module 14311: pressable ===

// Module 14311 (pressable)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 2888 */;
import useAgeVerificationRunner from "useAgeVerificationRunner" /* 4699 */;
import MobileUserSettings from "MobileUserSettings" /* 7830 */;
import openIncodeAgeVerificationModalDefault from "openIncodeAgeVerificationModal" /* 8628 */;
import AgeVerificationModalEntryPoint from "AgeVerificationModalEntryPoint" /* 8630 */;
import createToggle from "createToggle" /* 11006 */;

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
    let obj = openIncodeAgeVerificationModalDefault;
    obj = { entryPoint: AgeVerificationModalEntryPoint.AgeVerificationModalEntryPoint.ACCOUNT_AGE_GROUP };
    const result = obj.showAgeVerificationGetStartedModal(obj);
  },
  withArrow: true,
  usePredicate: useAgeVerificationRunner.useShowAssignedAgeGroupSettings
});
let obj = {
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
    let obj = openIncodeAgeVerificationModalDefault;
    obj = { entryPoint: AgeVerificationModalEntryPoint.AgeVerificationModalEntryPoint.ACCOUNT_AGE_GROUP };
    const result = obj.showAgeVerificationGetStartedModal(obj);
  },
  withArrow: true,
  usePredicate: useAgeVerificationRunner.useShowAssignedAgeGroupSettings
};
let result = set.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupConfirmSetting.tsx");

export default pressable;