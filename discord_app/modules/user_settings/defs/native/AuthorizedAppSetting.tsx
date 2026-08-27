// === Module 14494: route ===

// Module 14494 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import MobileUserSettings from "MobileUserSettings" /* 7816 */;
import createToggle from "createToggle" /* 10988 */;

obj = {
  useTitle() {
    return "";
  },
  parent: MobileUserSettings.MobileUserSettings.AUTHORIZED_APPS,
  unsearchable: true,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.AUTHORIZED_APP,
  getComponent() {
    return require(14495) /* AuthorizedAppScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/AuthorizedAppSetting.tsx");

export default route;