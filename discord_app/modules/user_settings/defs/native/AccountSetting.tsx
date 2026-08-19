// discord_app/modules/user_settings/defs/native/AccountSetting.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import ME from "../../../../Constants.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import UserCircleIcon from "../../../../design/components/Icon/native/redesign/generated/UserCircleIcon.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { PasswordlessUpsell } from "../../account/native/SettingsAccountScreen.tsx";

const obj = {
  route: ME.UserSettingsSections.ACCOUNT,
  getComponent() {
    return PasswordlessUpsell /* PasswordlessUpsell */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/AccountSetting.tsx");

export default route;