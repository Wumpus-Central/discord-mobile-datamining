// === Module 14498: AgeGroupResetSetting ===

// Module 14498 (AgeGroupResetSetting)
import jsxProd from "jsxProd" /* 21 */;
import util from "util" /* 1115 */;
import _modDef3039 from "module_3039" /* 3039 */;
import useAlertStore from "useAlertStore" /* 5401 */;
import SettingsConstants from "SettingsConstants" /* 7612 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 14495 */;
import SettingsAgeGroupResetAlert from "SettingsAgeGroupResetAlert" /* 14499 */;
import SettingBuilders from "SettingBuilders" /* 11211 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3039["bD//cU"]);
  },
  parent: SettingsConstants.MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT,
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef3039.Gn0SAj);
  },
  onPress() {
    useAlertStore.openAlert(SettingsAgeGroupResetAlert.SETTINGS_AGE_GROUP_RESET_ALERT_ID, jsx(SettingsAgeGroupResetAlert.default, {}));
  },
  withArrow: true,
  usePredicate: AgeGroupScreenRowProps.useShowAssignedAdultAgeGroupRow
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupResetSetting.tsx");

export default pressable;