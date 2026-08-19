// === Module 14893: route ===

// Module 14893 (route)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import PaintPaletteIcon from "PaintPaletteIcon" /* 8005 */;
import useDesignSystemsSettingPredicate from "useDesignSystemsSettingPredicate" /* 14894 */;
import createToggle from "createToggle" /* 10669 */;

const obj = {
  route: ME.UserSettingsSections.DESIGN_SYSTEM,
  getComponent() {
    return require(13990) /* SettingsDesignSystemsScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsSetting.tsx");

export default route;