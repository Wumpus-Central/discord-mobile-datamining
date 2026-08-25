// === Module 14979: useBugReporterExperimentSettingPredicate ===

// Module 14979 (useBugReporterExperimentSettingPredicate)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4611 from "module_4611" /* 4611 */;
import apexExperimentDefault from "apexExperiment" /* 10046 */;
import closure_3 from "zustandStore" /* 10016 */;
import createToggle from "createToggle" /* 10516 */;

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
      _modDef4611.pushLazy(asyncRequireImpl(10017, dependencyMap.paths));
      const obj2 = _modDef4611;
    }
  },
  withArrow: true,
  usePredicate: useBugReporterExperimentSettingPredicate
};
createToggle = createToggle.createPressable(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/BugReporterSetting.tsx");

export default createToggle;
export { useBugReporterExperimentSettingPredicate };