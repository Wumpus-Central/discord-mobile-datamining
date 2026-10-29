// === Module 17633: DesignSystemsSetting ===

// Module 17633 (DesignSystemsSetting)
import Constants from "Constants" /* 1084 */;
import PaintPaletteIcon from "PaintPaletteIcon" /* 17129 */;
import useDesignSystemsSettingPredicate from "useDesignSystemsSettingPredicate" /* 17634 */;
import SettingBuilders from "SettingBuilders" /* 11302 */;
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