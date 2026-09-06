// discord_app/modules/user_settings/defs/native/AccountAgeGroupAssignedAdultSetting.tsx
import Constants from "../../../../Constants.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef2946 from "../../../age_assurance/AgeAssurance.messages.js";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

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
    },
  },
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountAgeGroupAssignedAdultSetting.tsx");

export default route;
