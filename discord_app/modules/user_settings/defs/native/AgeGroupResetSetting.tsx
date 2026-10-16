// === Module 15697: AgeGroupResetSetting ===

// Module 15697 (AgeGroupResetSetting)
import jsxProd from "jsxProd" /* 21 */;
import util from "util" /* 1128 */;
import _modDef3125 from "module_3125" /* 3125 */;
import useAlertStore from "useAlertStore" /* 5363 */;
import SettingsConstants from "SettingsConstants" /* 8213 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 15694 */;
import SettingsAgeGroupResetAlert from "SettingsAgeGroupResetAlert" /* 15698 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3125["bD//cU"]);
  },
  parent: SettingsConstants.MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT,
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef3125.Gn0SAj);
  },
  onPress() {
    useAlertStore.openAlert(SettingsAgeGroupResetAlert.SETTINGS_AGE_GROUP_RESET_ALERT_ID, jsx(SettingsAgeGroupResetAlert.default, {}));
  },
  withArrow: true,
  usePredicate: AgeGroupScreenRowProps.useShowAssignedAdultAgeGroupRow
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupResetSetting.tsx");

export default pressable;