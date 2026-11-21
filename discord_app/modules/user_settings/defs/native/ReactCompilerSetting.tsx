// === Module 17378: ReactCompilerSetting ===

// Module 17378 (ReactCompilerSetting)
import UserSettings from "UserSettings" /* 4738 */;
import ReactCompilerGating from "ReactCompilerGating" /* 15376 */;
import WrenchIcon from "WrenchIcon" /* 16981 */;
import SettingBuilders from "SettingBuilders" /* 11937 */;
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