// discord_app/modules/user_settings/defs/native/DesignSystemsSetting.tsx
import Constants from "../../../../Constants.tsx";
import PaintPaletteIcon from "../../../../design/components/Icon/native/redesign/generated/PaintPaletteIcon.tsx";
import useDesignSystemsSettingPredicate from "../../design_system/native/useDesignSystemsSettingPredicate.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

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
    },
  },
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsSetting.tsx");

export default route;
