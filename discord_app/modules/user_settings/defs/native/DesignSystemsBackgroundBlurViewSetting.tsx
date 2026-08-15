// discord_app/modules/user_settings/defs/native/DesignSystemsBackgroundBlurViewSetting.tsx
import createToggle from "createToggle";
import { DemoModal } from "../../design_system/native/UserSettingsDesignSystemAlertModal.tsx";

obj = {
  useTitle() {
    return "Blur";
  },
  parent: require("MobileUserSettings").MobileUserSettings.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.DESIGN_SYSTEM_BACKGROUND_BLUR_VIEW,
  getComponent() {
    return DemoModal.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsBackgroundBlurViewSetting.tsx");

export default route;