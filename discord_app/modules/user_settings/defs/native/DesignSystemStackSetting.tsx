// discord_app/modules/user_settings/defs/native/DesignSystemStackSetting.tsx
import createToggle from "createToggle";
import { StackBlock } from "../../design_system/native/UserSettingsDesignSystemStack.tsx";

obj = {
  useTitle() {
    return "Stack";
  },
  parent: require("MobileSetting").MobileSetting.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.DESIGN_SYSTEM_STACK,
  getComponent() {
    return StackBlock.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemStackSetting.tsx");

export default route;