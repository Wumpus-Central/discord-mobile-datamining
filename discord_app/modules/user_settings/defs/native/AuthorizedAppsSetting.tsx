// discord_app/modules/user_settings/defs/native/AuthorizedAppsSetting.tsx
import set from "../../../../../_runtime/00002_set.js";
import ME from "../../../../Constants.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import KeyIcon from "../../../../design/components/Icon/native/redesign/generated/KeyIcon.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { UserSettingsAuthedApps } from "../../authorized_apps/native/UserSettingsAuthedApps.tsx";

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["f6kk+r"]);
  },
  parent: null,
  IconComponent: KeyIcon.KeyIcon,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.AUTHORIZED_APPS,
  getComponent() {
    return UserSettingsAuthedApps.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/AuthorizedAppsSetting.tsx");

export default route;