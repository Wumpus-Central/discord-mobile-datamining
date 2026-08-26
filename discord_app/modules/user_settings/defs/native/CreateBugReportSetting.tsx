// === Module 15065: toggle ===

// Module 15065 (toggle)
import initialize from "initialize" /* 589 */;
import setDeveloperOptionSettings2 from "setDeveloperOptionSettings" /* 708 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import showNotificationDefault from "showNotification" /* 10112 */;
import closure_3 from "refreshSourceMapCookie" /* 706 */;
import createToggle from "createToggle" /* 10584 */;

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.aIkGJD);
  },
  parent: null,
  IconComponent: require("WrenchIcon").WrenchIcon,
  onValueChange: function handleCreateBugReportSettingToggle(arg0) {
    const setDeveloperOptionSettings = setDeveloperOptionSettings2.setDeveloperOptionSettings;
    if (arg0) {
      const result = setDeveloperOptionSettings({ bugReporterEnabled: true });
      showNotificationDefault.initialize();
      const obj2 = showNotificationDefault;
    } else {
      const result1 = setDeveloperOptionSettings({ bugReporterEnabled: false });
      showNotificationDefault.terminate(true);
      const obj = showNotificationDefault;
    }
  },
  useValue: function useCreateBugReportSettingToggleValue() {
    const items = [closure_3];
    return initialize.useStateFromStores(items, () => isBugReporterEnabled.isBugReporterEnabled);
  },
  useDescription: function useCreateBugReportSettingDescription() {
    return "Photo permission is required";
  },
  usePredicate: require("useBugReporterExperimentSettingPredicate").useBugReporterExperimentSettingPredicate
};
createToggle = createToggle.createToggle(createToggle);
let result = require("set").fileFinishedImporting("modules/user_settings/defs/native/CreateBugReportSetting.tsx");

export default createToggle;