// === Module 17076: DesignSystemsSetting ===

// Module 17076 (DesignSystemsSetting)
import Constants from "Constants" /* 1071 */;
import PaintPaletteIcon from "PaintPaletteIcon" /* 16544 */;
import useDesignSystemsSettingPredicate from "useDesignSystemsSettingPredicate" /* 17077 */;
import SettingBuilders from "SettingBuilders" /* 11817 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

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