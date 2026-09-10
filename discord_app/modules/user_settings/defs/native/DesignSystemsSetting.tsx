// === Module 15831: DesignSystemsSetting ===

// Module 15831 (DesignSystemsSetting)
import Constants from "Constants" /* 1074 */;
import PaintPaletteIcon from "PaintPaletteIcon" /* 13454 */;
import useDesignSystemsSettingPredicate from "useDesignSystemsSettingPredicate" /* 15832 */;
import SettingBuilders from "SettingBuilders" /* 11540 */;
import size from "module_2" /* 2 */;

const route = SettingBuilders.createRoute({
  useTitle() {
    return "Design System";
  },
  parent: null,
  IconComponent: PaintPaletteIcon.PaintPaletteIcon,
  usePredicate: useDesignSystemsSettingPredicate.useDesignSystemsSettingPredicate,
  screen: {
    route: Constants.UserSettingsSections.DESIGN_SYSTEM,
    getComponent() {
      return require("UserSettingsDesignSystemsScreen").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsSetting.tsx");

export default route;