// discord_app/modules/user_settings/defs/native/CreateBugReportSetting.tsx
import refreshSourceMapCookie from "refreshSourceMapCookie";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.aIkGJD);
  },
  parent: null,
  IconComponent: require("WrenchIcon").WrenchIcon,
  onValueChange: function handleCreateBugReportSettingToggle(arg0) {
    const setDeveloperOptionSettings = require("../../../../actions/DeveloperOptionsActionCreators.tsx") /* setDeveloperOptionSettings */.setDeveloperOptionSettings;
    if (arg0) {
      const result = setDeveloperOptionSettings({ bugReporterEnabled: true });
      require("../../../bug_reporter/native/BugReportManager.tsx").initialize();
      const obj2 = require("../../../bug_reporter/native/BugReportManager.tsx");
    } else {
      const result1 = setDeveloperOptionSettings({ bugReporterEnabled: false });
      require("../../../bug_reporter/native/BugReportManager.tsx").terminate(true);
      const obj = require("../../../bug_reporter/native/BugReportManager.tsx");
    }
  },
  useValue: function useCreateBugReportSettingToggleValue() {
    const items = [refreshSourceMapCookie];
    return require("../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items, () => isBugReporterEnabled.isBugReporterEnabled);
  },
  useDescription: function useCreateBugReportSettingDescription() {
    return "Photo permission is required";
  },
  usePredicate: require("useBugReporterExperimentSettingPredicate").useBugReporterExperimentSettingPredicate
};
createToggle = createToggle.createToggle(createToggle);
let result = require("showNotification").fileFinishedImporting("modules/user_settings/defs/native/CreateBugReportSetting.tsx");

export default createToggle;