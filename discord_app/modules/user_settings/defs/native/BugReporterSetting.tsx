// === Module 15565: useBugReporterExperimentSettingPredicate ===

// Module 15565 (useBugReporterExperimentSettingPredicate)
import getSystemLocale from "getSystemLocale" /* 1233 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import _modDef4723 from "module_4723" /* 4723 */;
import apexExperimentDefault from "apexExperiment" /* 10320 */;
import closure_3 from "zustandStore" /* 10289 */;
import createToggle from "createToggle" /* 11288 */;

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
      _modDef4723.pushLazy(asyncRequireImpl(10290, dependencyMap.paths));
      const obj2 = _modDef4723;
    }
  },
  withArrow: true,
  usePredicate: useBugReporterExperimentSettingPredicate
};
createToggle = createToggle.createPressable(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/BugReporterSetting.tsx");

export default createToggle;
export { useBugReporterExperimentSettingPredicate };