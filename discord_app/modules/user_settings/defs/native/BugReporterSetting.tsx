// === Module 15058: useBugReporterExperimentSettingPredicate ===

// Module 15058 (useBugReporterExperimentSettingPredicate)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4675 from "module_4675" /* 4675 */;
import apexExperimentDefault from "apexExperiment" /* 10113 */;
import closure_3 from "zustandStore" /* 10083 */;
import createToggle from "createToggle" /* 10584 */;

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
      _modDef4675.pushLazy(asyncRequireImpl(10084, dependencyMap.paths));
      const obj2 = _modDef4675;
    }
  },
  withArrow: true,
  usePredicate: useBugReporterExperimentSettingPredicate
};
createToggle = createToggle.createPressable(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/BugReporterSetting.tsx");

export default createToggle;
export { useBugReporterExperimentSettingPredicate };