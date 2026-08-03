// === Module 14056: route ===

// Module 14056 (route)
import createToggle from "createToggle";

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
    return require(14057) /* AuthorizedAppScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/AuthorizedAppSetting.tsx");

export default route;