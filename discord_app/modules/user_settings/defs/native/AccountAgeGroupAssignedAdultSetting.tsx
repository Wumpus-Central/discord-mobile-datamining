// === Module 14924: AccountAgeGroupAssignedAdultSetting ===

// Module 14924 (AccountAgeGroupAssignedAdultSetting)
import Constants from "Constants" /* 1085 */;
import util from "util" /* 1126 */;
import _modDef3117 from "module_3117" /* 3117 */;
import SettingsConstants from "SettingsConstants" /* 7974 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 14925 */;
import SettingBuilders from "SettingBuilders" /* 10629 */;
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
    return "" + intl.string(util.t.XxRj7f) + " \u2022 " + intl2.string(_modDef3117.FTawSP);
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