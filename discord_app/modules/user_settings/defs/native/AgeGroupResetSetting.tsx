// discord_app/modules/user_settings/defs/native/AgeGroupResetSetting.tsx
import { jsx } from "jsxProd";
import createToggle from "createToggle";
import { useAlertStore } from "../../../../design/components/AlertModal/native/useAlertStore.native.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { messagesProxy } from "../../../age_assurance/AgeAssurance.messages.js";
import { SettingsAgeGroupResetAlert } from "../../age_group/native/SettingsAgeGroupResetAlert.tsx";

const pressable = createToggle.createPressable({
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(messagesProxy["bD//cU"]);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT,
  useDescription() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(messagesProxy.Gn0SAj);
  },
  onPress() {
    useAlertStore /* useAlertStore */.openAlert(SettingsAgeGroupResetAlert /* SettingsAgeGroupResetAlert */.SETTINGS_AGE_GROUP_RESET_ALERT_ID, jsx(SettingsAgeGroupResetAlert /* SettingsAgeGroupResetAlert */.default, {}));
  },
  withArrow: true,
  usePredicate: require("useAgeVerificationRunner").useShowAssignedAgeGroupSettings
});
const obj = {
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(messagesProxy["bD//cU"]);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT,
  useDescription() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(messagesProxy.Gn0SAj);
  },
  onPress() {
    useAlertStore /* useAlertStore */.openAlert(SettingsAgeGroupResetAlert /* SettingsAgeGroupResetAlert */.SETTINGS_AGE_GROUP_RESET_ALERT_ID, jsx(SettingsAgeGroupResetAlert /* SettingsAgeGroupResetAlert */.default, {}));
  },
  withArrow: true,
  usePredicate: require("useAgeVerificationRunner").useShowAssignedAgeGroupSettings
};
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/AgeGroupResetSetting.tsx");

export default pressable;