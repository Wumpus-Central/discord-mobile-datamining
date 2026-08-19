// discord_app/modules/user_settings/defs/native/ReactCompilerSetting.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import WrenchIcon from "../../../../design/components/Icon/native/redesign/generated/WrenchIcon.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";

const createStaticResult = createToggle.createStatic({
  useTitle() {
    return "React Compiler";
  },
  parent: null,
  IconComponent: WrenchIcon.WrenchIcon,
  useTrailing() {
    return "Enabled";
  },
  usePredicate() {
    return false;
  }
});
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/ReactCompilerSetting.tsx");

export default createStaticResult;