// === Module 14857: AgeGroupResetSetting ===

// Module 14857 (AgeGroupResetSetting)
import jsxProd from "jsxProd" /* 21 */;
import util from "util" /* 1115 */;
import _modDef2947 from "module_2947" /* 2947 */;
import useAlertStore from "useAlertStore" /* 4985 */;
import SettingsConstants from "SettingsConstants" /* 8082 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 14854 */;
import SettingsAgeGroupResetAlert from "SettingsAgeGroupResetAlert" /* 14858 */;
import SettingBuilders from "SettingBuilders" /* 11606 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2947["bD//cU"]);
  },
  parent: SettingsConstants.MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT,
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2947.Gn0SAj);
  },
  onPress() {
    useAlertStore.openAlert(SettingsAgeGroupResetAlert.SETTINGS_AGE_GROUP_RESET_ALERT_ID, jsx(SettingsAgeGroupResetAlert.default, {}));
  },
  withArrow: true,
  usePredicate: AgeGroupScreenRowProps.useShowAssignedAdultAgeGroupRow
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupResetSetting.tsx");

export default pressable;