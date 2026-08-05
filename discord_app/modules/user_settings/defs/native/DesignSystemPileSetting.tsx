// discord_app/modules/user_settings/defs/native/DesignSystemPileSetting.tsx
import createToggle from "createToggle";
import { SampleCard } from "../../design_system/native/UserSettingsDesignSystemPile.tsx";

obj = {
  useTitle() {
    return "Pile";
  },
  parent: require("MobileSetting").MobileSetting.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.DESIGN_SYSTEM_PILE,
  getComponent() {
    return SampleCard /* SampleCard */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemPileSetting.tsx");

export default route;