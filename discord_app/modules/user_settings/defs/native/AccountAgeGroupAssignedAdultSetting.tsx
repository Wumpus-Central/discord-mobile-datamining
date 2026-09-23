// === Module 15089: AccountAgeGroupAssignedAdultSetting ===

// Module 15089 (AccountAgeGroupAssignedAdultSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import _modDef3036 from "module_3036" /* 3036 */;
import SettingsConstants from "SettingsConstants" /* 8319 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 15090 */;
import SettingBuilders from "SettingBuilders" /* 11805 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.piqs0o);
  },
  parent: SettingsConstants.MobileUserSettings.ACCOUNT,
  useTrailing() {
    const intl = util.intl;
    const intl2 = util.intl;
    return "" + intl.string(util.t.XxRj7f) + " \u2022 " + intl2.string(_modDef3036.FTawSP);
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