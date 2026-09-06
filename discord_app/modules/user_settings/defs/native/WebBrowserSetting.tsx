// discord_app/modules/user_settings/defs/native/WebBrowserSetting.tsx
import Constants from "../../../../Constants.tsx";
import util from "../../../../intl/index.native.tsx";
import GlobeEarthIcon from "../../../../design/components/Icon/native/redesign/generated/GlobeEarthIcon.tsx";
import SelectWebBrowserSetting from "SelectWebBrowserSetting.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

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
    },
  },
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/WebBrowserSetting.tsx");

export default route;
