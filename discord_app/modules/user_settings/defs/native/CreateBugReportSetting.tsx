// === Module 15628: CreateBugReportSetting ===

// Module 15628 (CreateBugReportSetting)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import DeveloperOptionsActionCreators from "DeveloperOptionsActionCreators" /* 1358 */;
import BugReportManagerDefault from "BugReportManager" /* 12538 */;
import DeveloperOptionsStore from "DeveloperOptionsStore" /* 1357 */;

require = fn;
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(11129);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [DeveloperOptionsStore];
    const fn = function o() {
      return isBugReporterEnabled.isBugReporterEnabled;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return initialize.useStateFromStores(tmp4, tmp5);
}) : (() => {
  const items = [DeveloperOptionsStore];
  return initialize.useStateFromStores(items, () => isBugReporterEnabled.isBugReporterEnabled);
});
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.aIkGJD);
  },
  parent: null,
  IconComponent: fn(15385).WrenchIcon,
  onValueChange: function handleCreateBugReportSettingToggle(arg0) {
    const setDeveloperOptionSettings = DeveloperOptionsActionCreators.setDeveloperOptionSettings;
    if (arg0) {
      const result = setDeveloperOptionSettings({ bugReporterEnabled: true });
      BugReportManagerDefault.initialize();
    } else {
      const result1 = setDeveloperOptionSettings({ bugReporterEnabled: false });
      BugReportManagerDefault.terminate(true);
    }
  },
  useValue: ReactCompilerGating.isReactCompilerEnabled() ? (() => {
    const cResult = c.c(2);
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [DeveloperOptionsStore];
      const fn = function o() {
        return isBugReporterEnabled.isBugReporterEnabled;
      };
      cResult[0] = items;
      cResult[1] = fn;
      tmp4 = items;
      tmp5 = fn;
    } else {
      [tmp4, tmp5] = cResult;
    }
    return initialize.useStateFromStores(tmp4, tmp5);
  }) : (() => {
    const items = [DeveloperOptionsStore];
    return initialize.useStateFromStores(items, () => isBugReporterEnabled.isBugReporterEnabled);
  }),
  useDescription: function useCreateBugReportSettingDescription() {
    return "Photo permission is required";
  },
  usePredicate: fn(15615).useBugReporterExperimentSettingPredicate
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/CreateBugReportSetting.tsx");

export default toggle;