// === Module 15577: route ===

// Module 15577 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import PaintPaletteIcon from "PaintPaletteIcon" /* 13261 */;
import useDesignSystemsSettingPredicate from "useDesignSystemsSettingPredicate" /* 15578 */;
import createToggle from "createToggle" /* 11288 */;

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
    return require(15442) /* SettingsDesignSystemsScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsSetting.tsx");

export default route;