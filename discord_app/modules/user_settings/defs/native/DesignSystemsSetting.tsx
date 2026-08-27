// === Module 15130: route ===

// Module 15130 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import PaintPaletteIcon from "PaintPaletteIcon" /* 12953 */;
import useDesignSystemsSettingPredicate from "useDesignSystemsSettingPredicate" /* 15131 */;
import createToggle from "createToggle" /* 10988 */;

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
    return require(14193) /* SettingsDesignSystemsScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsSetting.tsx");

export default route;