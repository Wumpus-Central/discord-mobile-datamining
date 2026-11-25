// === Module 16184: AgeGroupResetSetting ===

// Module 16184 (AgeGroupResetSetting)
import jsxProd from "jsxProd" /* 21 */;
import util from "util" /* 1112 */;
import _modDef3498 from "module_3498" /* 3498 */;
import useAlertStore from "useAlertStore" /* 6017 */;
import SettingsConstants from "SettingsConstants" /* 9513 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 16181 */;
import SettingsAgeGroupResetAlert from "SettingsAgeGroupResetAlert" /* 16185 */;
import SettingBuilders from "SettingBuilders" /* 11914 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3498["bD//cU"]);
  },
  parent: SettingsConstants.MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT,
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef3498.Gn0SAj);
  },
  onPress() {
    useAlertStore.openAlert(SettingsAgeGroupResetAlert.SETTINGS_AGE_GROUP_RESET_ALERT_ID, jsx(SettingsAgeGroupResetAlert.default, {}));
  },
  withArrow: true,
  usePredicate: AgeGroupScreenRowProps.useShowAssignedAdultAgeGroupRow
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupResetSetting.tsx");

export default pressable;