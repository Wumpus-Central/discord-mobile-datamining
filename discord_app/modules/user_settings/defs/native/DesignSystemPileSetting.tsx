// discord_app/modules/user_settings/defs/native/DesignSystemPileSetting.tsx
import set from "../../../../../_runtime/00002_set.js";
import ME from "../../../../Constants.tsx";
import MobileUserSettings from "../../core/native/SettingsConstants.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { SampleCard } from "../../design_system/native/UserSettingsDesignSystemPile.tsx";

obj = {
  useTitle() {
    return "Pile";
  },
  parent: MobileUserSettings.MobileUserSettings.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.DESIGN_SYSTEM_PILE,
  getComponent() {
    return SampleCard /* SampleCard */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemPileSetting.tsx");

export default route;