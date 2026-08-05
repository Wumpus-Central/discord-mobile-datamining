// discord_app/modules/user_settings/defs/native/AgeGroupResetSetting.tsx
import { jsx } from "jsxProd";
import createToggle from "createToggle";

const pressable = createToggle.createPressable({
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../age_assurance/AgeAssurance.messages.js")["bD//cU"]);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT,
  useDescription() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../age_assurance/AgeAssurance.messages.js").Gn0SAj);
  },
  onPress() {
    require("../../../../design/components/AlertModal/native/useAlertStore.native.tsx") /* useAlertStore */.openAlert(require("../../age_group/native/SettingsAgeGroupResetAlert.tsx") /* SettingsAgeGroupResetAlert */.SETTINGS_AGE_GROUP_RESET_ALERT_ID, jsx(require("../../age_group/native/SettingsAgeGroupResetAlert.tsx") /* SettingsAgeGroupResetAlert */.default, {}));
  },
  withArrow: true,
  usePredicate: require("useAgeVerificationRunner").useShowAssignedAgeGroupSettings
});
const obj = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../age_assurance/AgeAssurance.messages.js")["bD//cU"]);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT,
  useDescription() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../age_assurance/AgeAssurance.messages.js").Gn0SAj);
  },
  onPress() {
    require("../../../../design/components/AlertModal/native/useAlertStore.native.tsx") /* useAlertStore */.openAlert(require("../../age_group/native/SettingsAgeGroupResetAlert.tsx") /* SettingsAgeGroupResetAlert */.SETTINGS_AGE_GROUP_RESET_ALERT_ID, jsx(require("../../age_group/native/SettingsAgeGroupResetAlert.tsx") /* SettingsAgeGroupResetAlert */.default, {}));
  },
  withArrow: true,
  usePredicate: require("useAgeVerificationRunner").useShowAssignedAgeGroupSettings
};
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/AgeGroupResetSetting.tsx");

export default pressable;