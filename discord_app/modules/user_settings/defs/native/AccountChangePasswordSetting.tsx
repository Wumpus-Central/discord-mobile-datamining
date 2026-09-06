// discord_app/modules/user_settings/defs/native/AccountChangePasswordSetting.tsx
import Constants from "../../../../Constants.tsx";
import util from "../../../../intl/index.native.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["CIGa+7"]);
  },
  parent: SettingsConstants.MobileUserSettings.ACCOUNT,
  screen: {
    route: Constants.UserSettingsSections.ACCOUNT_CHANGE_PASSWORD,
    getComponent() {
      return require("AccountEditPassword").default;
    },
  },
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountChangePasswordSetting.tsx");

export default route;
