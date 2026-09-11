// === Module 15816: DesignSystemsSetting ===

// Module 15816 (DesignSystemsSetting)
import Constants from "Constants" /* 1074 */;
import PaintPaletteIcon from "PaintPaletteIcon" /* 15323 */;
import useDesignSystemsSettingPredicate from "useDesignSystemsSettingPredicate" /* 15817 */;
import SettingBuilders from "SettingBuilders" /* 11562 */;
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