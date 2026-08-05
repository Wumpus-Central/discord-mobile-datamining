import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { setDeveloperOptionSettings } from "../../../../actions/DeveloperOptionsActionCreators.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { showNotification } from "../../../bug_reporter/native/BugReportManager.tsx";
// discord_app/modules/user_settings/defs/native/CreateBugReportSetting.tsx
import refreshSourceMapCookie from "refreshSourceMapCookie";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t.aIkGJD);
  },
  parent: null,
  IconComponent: require("WrenchIcon").WrenchIcon,
  onValueChange: function handleCreateBugReportSettingToggle(arg0) {
    const setDeveloperOptionSettings = setDeveloperOptionSettings /* setDeveloperOptionSettings */.setDeveloperOptionSettings;
    if (arg0) {
      const result = setDeveloperOptionSettings({ bugReporterEnabled: true });
      showNotification.initialize();
      const obj2 = showNotification;
    } else {
      const result1 = setDeveloperOptionSettings({ bugReporterEnabled: false });
      showNotification.terminate(true);
      const obj = showNotification;
    }
  },
  useValue: function useCreateBugReportSettingToggleValue() {
    const items = [refreshSourceMapCookie];
    return initialize /* initialize */.useStateFromStores(items, () => isBugReporterEnabled.isBugReporterEnabled);
  },
  useDescription: function useCreateBugReportSettingDescription() {
    return "Photo permission is required";
  },
  usePredicate: require("useBugReporterExperimentSettingPredicate").useBugReporterExperimentSettingPredicate
};
createToggle = createToggle.createToggle(createToggle);
let result = require("showNotification").fileFinishedImporting("modules/user_settings/defs/native/CreateBugReportSetting.tsx");

export default createToggle;