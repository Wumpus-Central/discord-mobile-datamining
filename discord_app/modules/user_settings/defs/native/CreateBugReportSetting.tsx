// === Module 17410: CreateBugReportSetting ===

// Module 17410 (CreateBugReportSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1112 */;
import DeveloperOptionsActionCreators from "DeveloperOptionsActionCreators" /* 1362 */;
import BugReportManagerDefault from "BugReportManager" /* 10732 */;
import DeveloperOptionsStore from "DeveloperOptionsStore" /* 1361 */;

require = fn;
const SettingBuilders = fn(11970);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.aIkGJD);
  },
  parent: null,
  IconComponent: fn(17192).WrenchIcon,
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
  useValue: function useCreateBugReportSettingToggleValue() {
    items = [DeveloperOptionsStore];
    return initialize.useStateFromStores(items, () => isBugReporterEnabled.isBugReporterEnabled);
  },
  useDescription: function useCreateBugReportSettingDescription() {
    return "Photo permission is required";
  },
  usePredicate: fn(17397).useBugReporterExperimentSettingPredicate
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/CreateBugReportSetting.tsx");

export default toggle;