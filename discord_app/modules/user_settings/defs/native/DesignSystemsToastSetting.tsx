// discord_app/modules/user_settings/defs/native/DesignSystemsToastSetting.tsx
import createToggle from "createToggle";

obj = {
  useTitle() {
    return "Toast";
  },
  parent: require("MobileSetting").MobileSetting.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.DESIGN_SYSTEM_TOAST,
  getComponent() {
    return require("../../design_system/native/UserSettingsDesignSystemToast.tsx") /* UserSettingsDesignSystemToast */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsToastSetting.tsx");

export default route;