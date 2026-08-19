// === Module 15024: ? ===

// Module 15024
import obj132 from "obj132" /* 2 */;
import WrenchIcon from "WrenchIcon" /* 14870 */;
import createToggle from "createToggle" /* 10669 */;

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