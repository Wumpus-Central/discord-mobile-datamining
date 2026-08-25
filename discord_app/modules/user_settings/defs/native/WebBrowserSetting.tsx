// === Module 14877: route ===

// Module 14877 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import GlobeEarthIcon from "GlobeEarthIcon" /* 10609 */;
import useWebBrowserSettingOptions from "useWebBrowserSettingOptions" /* 14878 */;
import createToggle from "createToggle" /* 10516 */;

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
    return require(14879).default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/WebBrowserSetting.tsx");

export default route;