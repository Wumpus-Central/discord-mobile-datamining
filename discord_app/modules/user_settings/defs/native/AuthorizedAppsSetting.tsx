// === Module 14294: route ===

// Module 14294 (route)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import KeyIcon from "KeyIcon" /* 8595 */;
import createToggle from "createToggle" /* 10669 */;

const obj = {
  route: ME.UserSettingsSections.AUTHORIZED_APPS,
  getComponent() {
    return require(14295) /* UserSettingsAuthedApps */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/AuthorizedAppsSetting.tsx");

export default route;