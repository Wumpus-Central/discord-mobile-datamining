// === Module 15913: BugReporterSetting ===

// Module 15913 (BugReporterSetting)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1999 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5940 */;
import BugReporterExperimentDefault from "BugReporterExperiment" /* 12652 */;
import BugReportStore from "BugReportStore" /* 12637 */;

require = fn;
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useBugReporterExperimentSettingPredicate() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: "native-settings" };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  return BugReporterExperimentDefault.useConfig(first).hasBugReporterAccess;
}) : (function useBugReporterExperimentSettingPredicate() {
  return BugReporterExperimentDefault.useConfig({ location: "native-settings" }).hasBugReporterAccess;
});
const SettingBuilders = fn(11262);
const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["/tZh0A"]);
  },
  parent: null,
  IconComponent: fn(15914).BugIcon,
  onPress: function handleBugReporterSettingPress() {
    if (!BugReportStore.getField("isReportOpen")) {
      BugReportStore.setState({ isReportOpen: true });
      ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(12638, dependencyMap.paths));
    }
  },
  withArrow: true,
  usePredicate: tmp2
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/BugReporterSetting.tsx");

export default pressable;
export const useBugReporterExperimentSettingPredicate = tmp2;