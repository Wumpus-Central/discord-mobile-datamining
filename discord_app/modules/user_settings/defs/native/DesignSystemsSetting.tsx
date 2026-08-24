// discord_app/modules/user_settings/defs/native/DesignSystemsSetting.tsx
import set from "../../../../../_runtime/00002_set.js";
import ME from "../../../../Constants.tsx";
import PaintPaletteIcon from "../../../../design/components/Icon/native/redesign/generated/PaintPaletteIcon.tsx";
import useDesignSystemsSettingPredicate from "../../design_system/native/useDesignSystemsSettingPredicate.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
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