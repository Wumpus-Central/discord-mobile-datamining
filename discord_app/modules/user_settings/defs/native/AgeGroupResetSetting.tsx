// === Module 15952: AgeGroupResetSetting ===

// Module 15952 (AgeGroupResetSetting)
import jsxProd from "jsxProd" /* 21 */;
import util from "util" /* 1113 */;
import _modDef3343 from "module_3343" /* 3343 */;
import useAlertStore from "useAlertStore" /* 5770 */;
import SettingsConstants from "SettingsConstants" /* 8624 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 15949 */;
import SettingsAgeGroupResetAlert from "SettingsAgeGroupResetAlert" /* 15953 */;
import SettingBuilders from "SettingBuilders" /* 11897 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3343["bD//cU"]);
  },
  parent: SettingsConstants.MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT,
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef3343.Gn0SAj);
  },
  onPress() {
    useAlertStore.openAlert(SettingsAgeGroupResetAlert.SETTINGS_AGE_GROUP_RESET_ALERT_ID, jsx(SettingsAgeGroupResetAlert.default, {}));
  },
  withArrow: true,
  usePredicate: AgeGroupScreenRowProps.useShowAssignedAdultAgeGroupRow
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupResetSetting.tsx");

export default pressable;