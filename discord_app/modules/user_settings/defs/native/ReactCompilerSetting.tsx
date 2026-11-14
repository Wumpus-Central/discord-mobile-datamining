// === Module 18578: ReactCompilerSetting ===

// Module 18578 (ReactCompilerSetting)
import UserSettings from "UserSettings" /* 5131 */;
import ReactCompilerGating from "ReactCompilerGating" /* 16585 */;
import WrenchIcon from "WrenchIcon" /* 18194 */;
import SettingBuilders from "SettingBuilders" /* 12406 */;
import size from "module_2" /* 2 */;

const obj = {
  useTitle() {
    return "React Compiler";
  },
  parent: null,
  IconComponent: WrenchIcon.WrenchIcon,
  useTrailing() {
    let str = "Disabled";
    if (obj.isReactCompilerEnabled()) {
      str = "Enabled";
    }
    return str;
  },
  usePredicate: function useReactCompilerPredicate() {
    const DeveloperMode = UserSettings.DeveloperMode;
    let setting = DeveloperMode.useSetting();
    if (setting) {
      setting = ReactCompilerGating.isReactCompilerBuild();
      const tmpResult = ReactCompilerGating;
    }
    return setting;
  }
};
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ReactCompilerSetting.tsx");

export default SettingBuilders.createStatic({
  useTitle() {
    return "React Compiler";
  },
  parent: null,
  IconComponent: WrenchIcon.WrenchIcon,
  useTrailing() {
    let str = "Disabled";
    if (obj.isReactCompilerEnabled()) {
      str = "Enabled";
    }
    return str;
  },
  usePredicate: function useReactCompilerPredicate() {
    const DeveloperMode = UserSettings.DeveloperMode;
    let setting = DeveloperMode.useSetting();
    if (setting) {
      setting = ReactCompilerGating.isReactCompilerBuild();
      const tmpResult = ReactCompilerGating;
    }
    return setting;
  }
});