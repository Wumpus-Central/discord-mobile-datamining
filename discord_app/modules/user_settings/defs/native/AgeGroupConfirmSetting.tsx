// === Module 14616: pressable ===

// Module 14616 (pressable)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import messagesProxyDefault from "messagesProxy" /* 2918 */;
import useAgeVerificationRunner from "useAgeVerificationRunner" /* 4734 */;
import MobileUserSettings from "MobileUserSettings" /* 7896 */;
import openIncodeAgeVerificationModalDefault from "openIncodeAgeVerificationModal" /* 8701 */;
import AgeVerificationModalEntryPoint from "AgeVerificationModalEntryPoint" /* 8703 */;
import createToggle from "createToggle" /* 11292 */;

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