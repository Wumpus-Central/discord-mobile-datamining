// discord_app/modules/user_settings/defs/native/DesignSystemsBackgroundBlurViewSetting.tsx
import createToggle from "createToggle";

obj = {
  useTitle() {
    return "Blur";
  },
  parent: require("MobileSetting").MobileSetting.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.DESIGN_SYSTEM_BACKGROUND_BLUR_VIEW,
  getComponent() {
    return require("../../design_system/native/UserSettingsDesignSystemAlertModal.tsx") /* DemoModal */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsBackgroundBlurViewSetting.tsx");

export default route;