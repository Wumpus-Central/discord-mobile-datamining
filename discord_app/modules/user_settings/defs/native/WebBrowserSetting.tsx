// discord_app/modules/user_settings/defs/native/WebBrowserSetting.tsx
import set from "../../../../../_runtime/00002_set.js";
import ME from "../../../../Constants.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import GlobeEarthIcon from "../../../../design/components/Icon/native/redesign/generated/GlobeEarthIcon.tsx";
import useWebBrowserSettingOptions from "SelectWebBrowserSetting.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { SettingsWebBrowserScreen } from "../../web_browser/native/SettingsWebBrowserScreen.tsx";

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
    return SettingsWebBrowserScreen.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/WebBrowserSetting.tsx");

export default route;