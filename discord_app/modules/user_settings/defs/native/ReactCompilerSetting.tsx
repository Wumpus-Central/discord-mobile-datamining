// === Module 17870: ReactCompilerSetting ===

// Module 17870 (ReactCompilerSetting)
import UserSettings from "UserSettings" /* 4834 */;
import ReactCompilerGating from "ReactCompilerGating" /* 15921 */;
import WrenchIcon from "WrenchIcon" /* 17486 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
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