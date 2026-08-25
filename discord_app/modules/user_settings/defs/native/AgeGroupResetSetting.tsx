// === Module 14228: pressable ===

// Module 14228 (pressable)
import set from "set" /* 2 */;
import jsxProd from "jsxProd" /* 21 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 2855 */;
import useAgeVerificationRunner from "useAgeVerificationRunner" /* 4621 */;
import useAlertStore from "useAlertStore" /* 4746 */;
import MobileUserSettings from "MobileUserSettings" /* 8235 */;
import SettingsAgeGroupResetAlert from "SettingsAgeGroupResetAlert" /* 14229 */;
import createToggle from "createToggle" /* 10516 */;

const jsx = jsxProd.jsx;
const pressable = createToggle.createPressable({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault["bD//cU"]);
  },
  parent: MobileUserSettings.MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT,
  useDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.Gn0SAj);
  },
  onPress() {
    useAlertStore.openAlert(SettingsAgeGroupResetAlert.SETTINGS_AGE_GROUP_RESET_ALERT_ID, jsx(SettingsAgeGroupResetAlert.default, {}));
  },
  withArrow: true,
  usePredicate: useAgeVerificationRunner.useShowAssignedAgeGroupSettings
});
const obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault["bD//cU"]);
  },
  parent: MobileUserSettings.MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT,
  useDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.Gn0SAj);
  },
  onPress() {
    useAlertStore.openAlert(SettingsAgeGroupResetAlert.SETTINGS_AGE_GROUP_RESET_ALERT_ID, jsx(SettingsAgeGroupResetAlert.default, {}));
  },
  withArrow: true,
  usePredicate: useAgeVerificationRunner.useShowAssignedAgeGroupSettings
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupResetSetting.tsx");

export default pressable;