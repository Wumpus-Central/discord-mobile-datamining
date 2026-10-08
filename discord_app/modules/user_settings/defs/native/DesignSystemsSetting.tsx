// === Module 15927: DesignSystemsSetting ===

// Module 15927 (DesignSystemsSetting)
import Constants from "Constants" /* 1085 */;
import PaintPaletteIcon from "PaintPaletteIcon" /* 15357 */;
import useDesignSystemsSettingPredicate from "useDesignSystemsSettingPredicate" /* 15928 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
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