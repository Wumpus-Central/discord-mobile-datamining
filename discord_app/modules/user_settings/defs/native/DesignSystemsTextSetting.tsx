// discord_app/modules/user_settings/defs/native/DesignSystemsTextSetting.tsx
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import MobileUserSettings from "MobileUserSettings" /* 8198 */;
import createToggle from "createToggle" /* 10669 */;
import { UserSettingsDesignSystemText } from "../../design_system/native/UserSettingsDesignSystemText.tsx";

obj = {
  useTitle() {
    return "Text";
  },
  parent: MobileUserSettings.MobileUserSettings.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.DESIGN_SYSTEM_TEXT,
  getComponent() {
    return UserSettingsDesignSystemText.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsTextSetting.tsx");

export default route;