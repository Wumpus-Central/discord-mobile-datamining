// === Module 14783: route ===

// Module 14783 (route)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import GlobeEarthIcon from "GlobeEarthIcon" /* 9826 */;
import useWebBrowserSettingOptions from "useWebBrowserSettingOptions" /* 14784 */;
import createToggle from "createToggle" /* 10669 */;

const obj = {
  route: ME.UserSettingsSections.BROWSER,
  getComponent() {
    return require(14785).default;
  }
};
const route = createToggle.createRoute(obj);
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/WebBrowserSetting.tsx");

export default route;