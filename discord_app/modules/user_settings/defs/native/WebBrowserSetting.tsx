// discord_app/modules/user_settings/defs/native/WebBrowserSetting.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import ME from "../../../../Constants.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import GlobeEarthIcon from "../../../../design/components/Icon/native/redesign/generated/GlobeEarthIcon.tsx";
import useWebBrowserSettingOptions from "SelectWebBrowserSetting.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";

const obj = {
  route: ME.UserSettingsSections.BROWSER,
  getComponent() {
    return require("../../web_browser/native/SettingsWebBrowserScreen.tsx").default;
  }
};
const route = createToggle.createRoute(obj);
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/WebBrowserSetting.tsx");

export default route;