// discord_app/modules/user_settings/defs/native/AuthorizedAppsSetting.tsx
import createToggle from "createToggle";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { UserSettingsAuthedApps } from "../../authorized_apps/native/UserSettingsAuthedApps.tsx";

obj = {
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t["f6kk+r"]);
  },
  parent: null,
  IconComponent: require("KeyIcon").KeyIcon,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.AUTHORIZED_APPS,
  getComponent() {
    return UserSettingsAuthedApps /* UserSettingsAuthedApps */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/AuthorizedAppsSetting.tsx");

export default route;