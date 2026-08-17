// discord_app/modules/user_settings/defs/native/DesignSystemsAlertModalSetting.tsx
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import MobileUserSettings from "MobileUserSettings" /* 8198 */;
import createToggle from "createToggle" /* 10669 */;
import { DemoModal } from "../../design_system/native/UserSettingsDesignSystemAlertModal.tsx";

obj = {
  useTitle() {
    return "Alert Modal";
  },
  parent: MobileUserSettings.MobileUserSettings.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.DESIGN_SYSTEM_ALERT_MODAL,
  getComponent() {
    return DemoModal.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsAlertModalSetting.tsx");

export default route;