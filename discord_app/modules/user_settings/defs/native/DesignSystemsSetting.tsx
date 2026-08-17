// discord_app/modules/user_settings/defs/native/DesignSystemsSetting.tsx
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import PaintPaletteIcon from "PaintPaletteIcon" /* 8005 */;
import useDesignSystemsSettingPredicate from "useDesignSystemsSettingPredicate" /* 14894 */;
import createToggle from "createToggle" /* 10669 */;
import { SettingsDesignSystemsScreen } from "../../design_system/native/UserSettingsDesignSystemsScreen.tsx";

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
    return SettingsDesignSystemsScreen.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsSetting.tsx");

export default route;