// discord_app/modules/user_settings/defs/native/WebBrowserSetting.tsx
import createToggle from "createToggle";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { SettingsWebBrowserScreen } from "../../web_browser/native/SettingsWebBrowserScreen.tsx";
import { useWebBrowserSettingOptions } from "SelectWebBrowserSetting.tsx";

obj = {
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t["C+DkPu"]);
  },
  usePredicate() {
    return useWebBrowserSettingOptions /* useWebBrowserSettingOptions */.useWebBrowserSettingOptions().length > 1;
  },
  parent: null,
  IconComponent: require("GlobeEarthIcon").GlobeEarthIcon,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.BROWSER,
  getComponent() {
    return SettingsWebBrowserScreen.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/WebBrowserSetting.tsx");

export default route;