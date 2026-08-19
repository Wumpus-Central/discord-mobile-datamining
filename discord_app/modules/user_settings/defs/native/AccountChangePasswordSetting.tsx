// discord_app/modules/user_settings/defs/native/AccountChangePasswordSetting.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import ME from "../../../../Constants.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import MobileUserSettings from "../../core/native/SettingsConstants.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";

const obj = {
  route: ME.UserSettingsSections.ACCOUNT_CHANGE_PASSWORD,
  getComponent() {
    return require("../../account/native/AccountEditPassword.tsx").default;
  }
};
const route = createToggle.createRoute(obj);
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/AccountChangePasswordSetting.tsx");

export default route;