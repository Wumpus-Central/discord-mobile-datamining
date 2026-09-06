// === Module 15737: useBugReporterExperimentSettingPredicate ===

// Module 15737 (useBugReporterExperimentSettingPredicate)
import getSystemLocale from "getSystemLocale" /* 1114 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import _modDef4763 from "module_4763" /* 4763 */;
import apexExperimentDefault from "apexExperiment" /* 10215 */;
import closure_3 from "zustandStore" /* 10184 */;
import createToggle from "createToggle" /* 11468 */;

require = arg1;
function useBugReporterExperimentSettingPredicate() {
  return apexExperimentDefault.useConfig({ location: "native-settings" }).hasBugReporterAccess;
}
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["/tZh0A"]);
  },
  parent: null,
  IconComponent: require("BugIcon").BugIcon,
  onPress: function handleBugReporterSettingPress() {
    if (!field.getField("isReportOpen")) {
      field.setState({ isReportOpen: true });
      _modDef4763.pushLazy(asyncRequireImpl(10185, dependencyMap.paths));
      const obj2 = _modDef4763;
    }
  },
  withArrow: true,
  usePredicate: useBugReporterExperimentSettingPredicate
};
createToggle = createToggle.createPressable(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/BugReporterSetting.tsx");

export default createToggle;
export { useBugReporterExperimentSettingPredicate };