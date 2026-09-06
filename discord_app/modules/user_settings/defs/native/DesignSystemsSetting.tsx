// === Module 15749: route ===

// Module 15749 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import PaintPaletteIcon from "PaintPaletteIcon" /* 13378 */;
import useDesignSystemsSettingPredicate from "useDesignSystemsSettingPredicate" /* 15750 */;
import createToggle from "createToggle" /* 11468 */;

obj = {
  useTitle() {
    return "Design System";
  },
  parent: null,
  IconComponent: PaintPaletteIcon.PaintPaletteIcon,
  usePredicate: useDesignSystemsSettingPredicate.useDesignSystemsSettingPredicate,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.DESIGN_SYSTEM,
  getComponent() {
    return require(15614) /* SettingsDesignSystemsScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsSetting.tsx");

export default route;