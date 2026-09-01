// discord_app/modules/user_settings/defs/native/DesignSystemsContextMenuSetting.tsx
import set from "../../../../../_runtime/00002_set.js";
import ME from "../../../../Constants.tsx";
import MobileUserSettings from "../../core/native/SettingsConstants.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { DemoContextMenu } from "../../design_system/native/UserSettingsDesignSystemContextMenu.tsx";

obj = {
  useTitle() {
    return "Context Menu";
  },
  parent: MobileUserSettings.MobileUserSettings.DESIGN_SYSTEMS,
  screen: obj,
};
obj = {
  route: ME.UserSettingsSections.DESIGN_SYSTEM_CONTEXT_MENU,
  getComponent() {
    return DemoContextMenu /* DemoContextMenu */.default;
  },
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsContextMenuSetting.tsx");

export default route;
