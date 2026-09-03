// === Module 15591: route ===

// Module 15591 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import PaintPaletteIcon from "PaintPaletteIcon" /* 13273 */;
import useDesignSystemsSettingPredicate from "useDesignSystemsSettingPredicate" /* 15592 */;
import createToggle from "createToggle" /* 11292 */;

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
    return require(15456) /* SettingsDesignSystemsScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsSetting.tsx");

export default route;