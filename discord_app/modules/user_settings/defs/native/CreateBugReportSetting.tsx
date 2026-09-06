// discord_app/modules/user_settings/defs/native/CreateBugReportSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import util from "../../../../intl/index.native.tsx";
import DeveloperOptionsActionCreators from "../../../../actions/DeveloperOptionsActionCreators.tsx";
import BugReportManagerDefault from "../../../bug_reporter/native/BugReportManager.tsx";
import DeveloperOptionsStore from "../../../../stores/DeveloperOptionsStore.tsx";

require = fn;
fn(11468);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.aIkGJD);
  },
  parent: null,
  IconComponent: fn(15562).WrenchIcon,
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
    const items = [DeveloperOptionsStore];
    return initialize.useStateFromStores(items, () => isBugReporterEnabled.isBugReporterEnabled);
  },
  useDescription: function useCreateBugReportSettingDescription() {
    return "Photo permission is required";
  },
  usePredicate: fn(15737).useBugReporterExperimentSettingPredicate,
};
SettingBuilders = SettingBuilders.createToggle(SettingBuilders);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/CreateBugReportSetting.tsx");

export default SettingBuilders;
