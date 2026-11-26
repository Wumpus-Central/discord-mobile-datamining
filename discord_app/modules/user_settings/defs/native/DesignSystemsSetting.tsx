// === Module 17404: DesignSystemsSetting ===

// Module 17404 (DesignSystemsSetting)
import Constants from "Constants" /* 1071 */;
import PaintPaletteIcon from "PaintPaletteIcon" /* 16873 */;
import useDesignSystemsSettingPredicate from "useDesignSystemsSettingPredicate" /* 17405 */;
import SettingBuilders from "SettingBuilders" /* 11962 */;
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