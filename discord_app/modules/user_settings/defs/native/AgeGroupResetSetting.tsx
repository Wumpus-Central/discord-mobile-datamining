// === Module 14130: pressable ===

// Module 14130 (pressable)
import obj132 from "obj132" /* 2 */;
import jsxProd from "jsxProd" /* 21 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 2853 */;
import useAlertStore from "useAlertStore" /* 4657 */;
import useAgeVerificationRunner from "useAgeVerificationRunner" /* 4992 */;
import MobileUserSettings from "MobileUserSettings" /* 8198 */;
import SettingsAgeGroupResetAlert from "SettingsAgeGroupResetAlert" /* 14131 */;
import createToggle from "createToggle" /* 10669 */;

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
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupResetSetting.tsx");

export default pressable;