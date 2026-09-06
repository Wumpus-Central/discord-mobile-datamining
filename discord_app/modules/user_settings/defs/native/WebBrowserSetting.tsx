// === Module 15475: route ===

// Module 15475 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import GlobeEarthIcon from "GlobeEarthIcon" /* 8886 */;
import useWebBrowserSettingOptions from "useWebBrowserSettingOptions" /* 15476 */;
import createToggle from "createToggle" /* 11468 */;

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["C+DkPu"]);
  },
  usePredicate() {
    return useWebBrowserSettingOptions.useWebBrowserSettingOptions().length > 1;
  },
  parent: null,
  IconComponent: GlobeEarthIcon.GlobeEarthIcon,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.BROWSER,
  getComponent() {
    return require(15477).default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/WebBrowserSetting.tsx");

export default route;