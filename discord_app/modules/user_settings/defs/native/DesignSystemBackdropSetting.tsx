// discord_app/modules/user_settings/defs/native/DesignSystemBackdropSetting.tsx
import createToggle from "createToggle";
import { BackdropCard } from "../../design_system/native/UserSettingsDesignSystemBackdrop.tsx";

obj = {
  useTitle() {
    return "Backdrop";
  },
  parent: require("MobileSetting").MobileSetting.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.DESIGN_SYSTEM_BACKDROP,
  getComponent() {
    return BackdropCard.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemBackdropSetting.tsx");

export default route;