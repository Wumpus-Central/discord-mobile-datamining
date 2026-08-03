// === Module 14636: route ===

// Module 14636 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    return "Button";
  },
  parent: require("MobileSetting").MobileSetting.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.DESIGN_SYSTEM_BUTTON,
  getComponent() {
    return require(14637) /* ExampleButton */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsButtonSetting.tsx");

export default route;