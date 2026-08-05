// discord_app/modules/user_settings/defs/native/AuthorizedAppSetting.tsx
import createToggle from "createToggle";
import { AuthorizedAppScreen } from "../../authorized_apps/native/AuthorizedAppScreen.tsx";

obj = {
  useTitle() {
    return "";
  },
  parent: require("MobileSetting").MobileSetting.AUTHORIZED_APPS,
  unsearchable: true,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.AUTHORIZED_APP,
  getComponent() {
    return AuthorizedAppScreen.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/AuthorizedAppSetting.tsx");

export default route;