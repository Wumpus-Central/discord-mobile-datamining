// === Module 17020: ReactCompilerSetting ===

// Module 17020 (ReactCompilerSetting)
import UserSettings from "UserSettings" /* 4776 */;
import WrenchIcon from "WrenchIcon" /* 16654 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11099 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
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
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/ReactCompilerSetting.tsx");

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