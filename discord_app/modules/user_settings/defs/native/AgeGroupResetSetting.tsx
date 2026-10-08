// === Module 14820: AgeGroupResetSetting ===

// Module 14820 (AgeGroupResetSetting)
import jsxProd from "jsxProd" /* 21 */;
import util from "util" /* 1126 */;
import _modDef3117 from "module_3117" /* 3117 */;
import useAlertStore from "useAlertStore" /* 5299 */;
import SettingsConstants from "SettingsConstants" /* 7966 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 14817 */;
import SettingsAgeGroupResetAlert from "SettingsAgeGroupResetAlert" /* 14821 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3117["bD//cU"]);
  },
  parent: SettingsConstants.MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT,
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef3117.Gn0SAj);
  },
  onPress() {
    useAlertStore.openAlert(SettingsAgeGroupResetAlert.SETTINGS_AGE_GROUP_RESET_ALERT_ID, jsx(SettingsAgeGroupResetAlert.default, {}));
  },
  withArrow: true,
  usePredicate: AgeGroupScreenRowProps.useShowAssignedAdultAgeGroupRow
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupResetSetting.tsx");

export default pressable;