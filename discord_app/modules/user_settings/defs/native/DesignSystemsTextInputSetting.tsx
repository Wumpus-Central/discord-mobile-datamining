// discord_app/modules/user_settings/defs/native/DesignSystemsTextInputSetting.tsx
import createToggle from "createToggle";
import { Sample } from "../../design_system/native/UserSettingsDesignSystemTextInput.tsx";

obj = {
  useTitle() {
    return "Text Input";
  },
  parent: require("MobileSetting").MobileSetting.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.DESIGN_SYSTEM_TEXT_INPUT,
  getComponent() {
    return Sample /* Sample */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsTextInputSetting.tsx");

export default route;