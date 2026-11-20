// === Module 17062: BugReporterSetting ===

// Module 17062 (BugReporterSetting)
import util from "util" /* 1112 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6310 */;
import BugReporterExperimentDefault from "BugReporterExperiment" /* 11090 */;
import BugReportStore from "BugReportStore" /* 11049 */;

require = fn;
function useBugReporterExperimentSettingPredicate() {
  return BugReporterExperimentDefault.useConfig({ location: "native-settings" }).hasBugReporterAccess;
}
const SettingBuilders = fn(11817);
const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["/tZh0A"]);
  },
  parent: null,
  IconComponent: fn(17063).BugIcon,
  onPress: function handleBugReporterSettingPress() {
    if (!BugReportStore.getField("isReportOpen")) {
      BugReportStore.setState({ isReportOpen: true });
      ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11050, dependencyMap.paths));
    }
  },
  withArrow: true,
  usePredicate: useBugReporterExperimentSettingPredicate
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/BugReporterSetting.tsx");

export default pressable;
export { useBugReporterExperimentSettingPredicate };