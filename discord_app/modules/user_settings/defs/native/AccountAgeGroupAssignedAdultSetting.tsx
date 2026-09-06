// === Module 14756: AccountAgeGroupAssignedAdultSetting ===

// Module 14756 (AccountAgeGroupAssignedAdultSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import _modDef2946 from "module_2946" /* 2946 */;
import SettingsConstants from "SettingsConstants" /* 7975 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 14757 */;
import SettingBuilders from "SettingBuilders" /* 11468 */;
import size from "module_2" /* 2 */;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.piqs0o);
  },
  parent: SettingsConstants.MobileUserSettings.ACCOUNT,
  useTrailing() {
    const intl = util.intl;
    const intl2 = util.intl;
    return "" + intl.string(util.t.XxRj7f) + " \u2022 " + intl2.string(_modDef2946.FTawSP);
  },
  usePredicate: AgeGroupScreenRowProps.useShowAssignedAdultAgeGroupRow,
  screen: {
    route: Constants.UserSettingsSections.AGE_GROUP,
    getComponent() {
      return require("SettingsAgeGroupScreen").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountAgeGroupAssignedAdultSetting.tsx");

export default route;