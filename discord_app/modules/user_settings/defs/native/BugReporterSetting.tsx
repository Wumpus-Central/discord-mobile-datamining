// === Module 15804: BugReporterSetting ===

// Module 15804 (BugReporterSetting)
import util from "util" /* 1114 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4809 */;
import BugReporterExperimentDefault from "BugReporterExperiment" /* 10304 */;
import BugReportStore from "BugReportStore" /* 10273 */;

require = fn;
function useBugReporterExperimentSettingPredicate() {
  return BugReporterExperimentDefault.useConfig({ location: "native-settings" }).hasBugReporterAccess;
}
fn(11562);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["/tZh0A"]);
  },
  parent: null,
  IconComponent: fn(15805).BugIcon,
  onPress: function handleBugReporterSettingPress() {
    if (!BugReportStore.getField("isReportOpen")) {
      BugReportStore.setState({ isReportOpen: true });
      ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(10274, dependencyMap.paths));
    }
  },
  withArrow: true,
  usePredicate: useBugReporterExperimentSettingPredicate
};
SettingBuilders = SettingBuilders.createPressable(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/BugReporterSetting.tsx");

export default SettingBuilders;
export { useBugReporterExperimentSettingPredicate };