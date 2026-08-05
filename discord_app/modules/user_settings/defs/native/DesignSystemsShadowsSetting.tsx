// discord_app/modules/user_settings/defs/native/DesignSystemsShadowsSetting.tsx
import createToggle from "createToggle";
import { DemoModal } from "../../design_system/native/UserSettingsDesignSystemAlertModal.tsx";

obj = {
  useTitle() {
    return "Shadows";
  },
  parent: require("MobileSetting").MobileSetting.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.DESIGN_SYSTEM_SHADOWS,
  getComponent() {
    return DemoModal.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsShadowsSetting.tsx");

export default route;