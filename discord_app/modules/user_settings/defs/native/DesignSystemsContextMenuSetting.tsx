// discord_app/modules/user_settings/defs/native/DesignSystemsContextMenuSetting.tsx
import createToggle from "createToggle";

obj = {
  useTitle() {
    return "Context Menu";
  },
  parent: require("MobileSetting").MobileSetting.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.DESIGN_SYSTEM_CONTEXT_MENU,
  getComponent() {
    return require("../../design_system/native/UserSettingsDesignSystemContextMenu.tsx") /* DemoContextMenu */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsContextMenuSetting.tsx");

export default route;