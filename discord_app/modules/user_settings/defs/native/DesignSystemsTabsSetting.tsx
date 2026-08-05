import { UserSettingsDesignSystemTabs } from "../../design_system/native/UserSettingsDesignSystemTabs.tsx";
// discord_app/modules/user_settings/defs/native/DesignSystemsTabsSetting.tsx
import createToggle from "createToggle";

obj = {
  useTitle() {
    return "Tabs";
  },
  parent: require("MobileSetting").MobileSetting.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.DESIGN_SYSTEM_TABS,
  getComponent() {
    return UserSettingsDesignSystemTabs /* UserSettingsDesignSystemTabs */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsTabsSetting.tsx");

export default route;