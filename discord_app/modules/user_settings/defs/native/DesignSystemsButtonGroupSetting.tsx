// discord_app/modules/user_settings/defs/native/DesignSystemsButtonGroupSetting.tsx
import createToggle from "createToggle";
import { UserSettingsDesignSystemButtonGroup } from "../../design_system/native/UserSettingsDesignSystemButtonGroup.tsx";

obj = {
  useTitle() {
    return "Button Group";
  },
  parent: require("MobileSetting").MobileSetting.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.DESIGN_SYSTEM_BUTTON_GROUP,
  getComponent() {
    return UserSettingsDesignSystemButtonGroup /* UserSettingsDesignSystemButtonGroup */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsButtonGroupSetting.tsx");

export default route;