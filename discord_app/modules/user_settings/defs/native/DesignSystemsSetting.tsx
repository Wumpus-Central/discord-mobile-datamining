// discord_app/modules/user_settings/defs/native/DesignSystemsSetting.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import ME from "../../../../Constants.tsx";
import PaintPaletteIcon from "../../../../design/components/Icon/native/redesign/generated/PaintPaletteIcon.tsx";
import useDesignSystemsSettingPredicate from "../../design_system/native/useDesignSystemsSettingPredicate.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { SettingsDesignSystemsScreen } from "../../design_system/native/UserSettingsDesignSystemsScreen.tsx";

const obj = {
  route: ME.UserSettingsSections.DESIGN_SYSTEM,
  getComponent() {
    return SettingsDesignSystemsScreen /* SettingsDesignSystemsScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsSetting.tsx");

export default route;