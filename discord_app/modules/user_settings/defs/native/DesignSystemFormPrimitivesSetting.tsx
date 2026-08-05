import { Radio } from "../../design_system/native/UserSettingsDesignSystemFormPrimitives.tsx";
// discord_app/modules/user_settings/defs/native/DesignSystemFormPrimitivesSetting.tsx
import createToggle from "createToggle";

obj = {
  useTitle() {
    return "Form Primitives";
  },
  parent: require("MobileSetting").MobileSetting.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.DESIGN_SYSTEM_FORM_PRIMITIVES,
  getComponent() {
    return Radio /* Radio */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemFormPrimitivesSetting.tsx");

export default route;