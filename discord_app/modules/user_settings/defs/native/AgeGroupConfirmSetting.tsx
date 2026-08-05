import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { messagesProxy } from "../../../age_assurance/AgeAssurance.messages.js";
import { openIncodeAgeVerificationModal } from "../../../age_assurance/AgeVerificationActionCreators.native.tsx";
import { AgeVerificationModalEntryPoint } from "../../../age_assurance/AgeVerificationAnalyticsUtils.tsx";
// discord_app/modules/user_settings/defs/native/AgeGroupConfirmSetting.tsx
import createToggle from "createToggle";

const pressable = createToggle.createPressable({
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(messagesProxy.SH6Tcv);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT,
  useDescription() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(messagesProxy.rJiO86);
  },
  onPress: function onAgeGroupConfirmPress() {
    let obj = openIncodeAgeVerificationModal;
    obj = { entryPoint: AgeVerificationModalEntryPoint /* AgeVerificationModalEntryPoint */.AgeVerificationModalEntryPoint.ACCOUNT_AGE_GROUP };
    const result = obj.showAgeVerificationGetStartedModal(obj);
  },
  withArrow: true,
  usePredicate: require("useAgeVerificationRunner").useShowAssignedAgeGroupSettings
});
let obj = {
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(messagesProxy.SH6Tcv);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT,
  useDescription() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(messagesProxy.rJiO86);
  },
  onPress: function onAgeGroupConfirmPress() {
    let obj = openIncodeAgeVerificationModal;
    obj = { entryPoint: AgeVerificationModalEntryPoint /* AgeVerificationModalEntryPoint */.AgeVerificationModalEntryPoint.ACCOUNT_AGE_GROUP };
    const result = obj.showAgeVerificationGetStartedModal(obj);
  },
  withArrow: true,
  usePredicate: require("useAgeVerificationRunner").useShowAssignedAgeGroupSettings
};
let result = require("AgeVerificationModalEntryPoint").fileFinishedImporting("modules/user_settings/defs/native/AgeGroupConfirmSetting.tsx");

export default pressable;