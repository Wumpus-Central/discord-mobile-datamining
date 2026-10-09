// discord_app/modules/user_settings/defs/native/BugReporterSetting.tsx
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../../_runtime/02000_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import BugReporterExperimentDefault from "../../../bug_reporter/BugReporterExperiment.tsx";
import BugReportStore from "../../../bug_reporter/BugReportStore.tsx";

require = fn;
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useBugReporterExperimentSettingPredicate() {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { location: "native-settings" };
        cResult[0] = obj2;
        let first = obj2;
      } else {
        first = cResult[0];
      }
      return BugReporterExperimentDefault.useConfig(first).hasBugReporterAccess;
    }
  : function useBugReporterExperimentSettingPredicate() {
      return BugReporterExperimentDefault.useConfig({ location: "native-settings" }).hasBugReporterAccess;
    };
const SettingBuilders = fn(10629);
const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["/tZh0A"]);
  },
  parent: null,
  IconComponent: fn(16031).BugIcon,
  onPress: function handleBugReporterSettingPress() {
    if (!BugReportStore.getField("isReportOpen")) {
      BugReportStore.setState({ isReportOpen: true });
      ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(12578, dependencyMap.paths));
    }
  },
  withArrow: true,
  usePredicate: tmp2,
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/BugReporterSetting.tsx");

export default pressable;
export const useBugReporterExperimentSettingPredicate = tmp2;
