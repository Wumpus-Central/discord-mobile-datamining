// discord_app/modules/user_settings/defs/native/AgeGroupConfirmSetting.tsx
import createToggle from "createToggle";

const pressable = createToggle.createPressable({
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../age_assurance/AgeAssurance.messages.js").SH6Tcv);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT,
  useDescription() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../age_assurance/AgeAssurance.messages.js").rJiO86);
  },
  onPress: function onAgeGroupConfirmPress() {
    let obj = require("../../../age_assurance/AgeVerificationActionCreators.native.tsx");
    obj = { entryPoint: require("../../../age_assurance/AgeVerificationAnalyticsUtils.tsx") /* AgeVerificationModalEntryPoint */.AgeVerificationModalEntryPoint.ACCOUNT_AGE_GROUP };
    const result = obj.showAgeVerificationGetStartedModal(obj);
  },
  withArrow: true,
  usePredicate: require("useAgeVerificationRunner").useShowAssignedAgeGroupSettings
});
let obj = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../age_assurance/AgeAssurance.messages.js").SH6Tcv);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT,
  useDescription() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../age_assurance/AgeAssurance.messages.js").rJiO86);
  },
  onPress: function onAgeGroupConfirmPress() {
    let obj = require("../../../age_assurance/AgeVerificationActionCreators.native.tsx");
    obj = { entryPoint: require("../../../age_assurance/AgeVerificationAnalyticsUtils.tsx") /* AgeVerificationModalEntryPoint */.AgeVerificationModalEntryPoint.ACCOUNT_AGE_GROUP };
    const result = obj.showAgeVerificationGetStartedModal(obj);
  },
  withArrow: true,
  usePredicate: require("useAgeVerificationRunner").useShowAssignedAgeGroupSettings
};
let result = require("AgeVerificationModalEntryPoint").fileFinishedImporting("modules/user_settings/defs/native/AgeGroupConfirmSetting.tsx");

export default pressable;