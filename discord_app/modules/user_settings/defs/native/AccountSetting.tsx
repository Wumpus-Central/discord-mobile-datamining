// discord_app/modules/user_settings/defs/native/AccountSetting.tsx
import set from "../../../../../_runtime/00002_set.js";
import ME from "../../../../Constants.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import UserCircleIcon from "../../../../design/components/Icon/native/redesign/generated/UserCircleIcon.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { PasswordlessUpsell } from "../../account/native/SettingsAccountScreen.tsx";

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["ldCE/p"]);
  },
  parent: null,
  IconComponent: UserCircleIcon.UserCircleIcon,
  screen: obj,
};
obj = {
  route: ME.UserSettingsSections.ACCOUNT,
  getComponent() {
    return PasswordlessUpsell /* PasswordlessUpsell */.default;
  },
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/AccountSetting.tsx");

export default route;
