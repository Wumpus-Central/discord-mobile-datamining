// === Module 15478: WebBrowserSetting ===

// Module 15478 (WebBrowserSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import GlobeEarthIcon from "GlobeEarthIcon" /* 8891 */;
import SelectWebBrowserSetting from "SelectWebBrowserSetting" /* 15479 */;
import SettingBuilders from "SettingBuilders" /* 11473 */;
import size from "module_2" /* 2 */;

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