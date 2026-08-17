// discord_app/modules/user_settings/defs/native/DesignSystemsTabsSetting.tsx
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import MobileUserSettings from "MobileUserSettings" /* 8198 */;
import createToggle from "createToggle" /* 10669 */;
import { UserSettingsDesignSystemTabs } from "../../design_system/native/UserSettingsDesignSystemTabs.tsx";

obj = {
  useTitle() {
    return "Tabs";
  },
  parent: MobileUserSettings.MobileUserSettings.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.DESIGN_SYSTEM_TABS,
  getComponent() {
    return UserSettingsDesignSystemTabs.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsTabsSetting.tsx");

export default route;