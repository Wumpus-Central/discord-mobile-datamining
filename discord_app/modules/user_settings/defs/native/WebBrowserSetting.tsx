// discord_app/modules/user_settings/defs/native/WebBrowserSetting.tsx
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["C+DkPu"]);
  },
  usePredicate() {
    return require(14455) /* useWebBrowserSettingOptions */.useWebBrowserSettingOptions().length > 1;
  },
  parent: null,
  IconComponent: require("GlobeEarthIcon").GlobeEarthIcon,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.BROWSER,
  getComponent() {
    return require(14456).default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/WebBrowserSetting.tsx");

export default route;