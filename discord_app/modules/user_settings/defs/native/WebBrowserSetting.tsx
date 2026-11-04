// === Module 17715: WebBrowserSetting ===

// Module 17715 (WebBrowserSetting)
import Constants from "Constants" /* 1072 */;
import util from "util" /* 1113 */;
import GlobeEarthIcon from "GlobeEarthIcon" /* 9195 */;
import SelectWebBrowserSetting from "SelectWebBrowserSetting" /* 17716 */;
import SettingBuilders from "SettingBuilders" /* 11729 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["C+DkPu"]);
  },
  usePredicate() {
    return SelectWebBrowserSetting.useWebBrowserSettingOptions().length > 1;
  },
  parent: null,
  IconComponent: GlobeEarthIcon.GlobeEarthIcon,
  screen: {
    route: Constants.UserSettingsSections.BROWSER,
    getComponent() {
      return require("SettingsWebBrowserScreen").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/WebBrowserSetting.tsx");

export default route;