// discord_app/modules/user_settings/defs/native/BugReporterSetting.tsx
import zustandStore from "zustandStore";
import createToggle from "createToggle";

const require = arg1;
function useBugReporterExperimentSettingPredicate() {
  return require("../../../bug_reporter/BugReporterExperiment.tsx").useConfig({ location: "native-settings" }).hasBugReporterAccess;
}
createToggle = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["/tZh0A"]);
  },
  parent: null,
  IconComponent: require("BugIcon").BugIcon,
  onPress: function handleBugReporterSettingPress() {
    if (!field.getField("isReportOpen")) {
      field.setState({ isReportOpen: true });
      require("../../../../actions/ModalActionCreators.tsx").pushLazy(require("../../../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(9782, dependencyMap.paths));
      const obj2 = require("../../../../actions/ModalActionCreators.tsx");
    }
  },
  withArrow: true,
  usePredicate: useBugReporterExperimentSettingPredicate
};
createToggle = createToggle.createPressable(createToggle);
const result = require("handleClose").fileFinishedImporting("modules/user_settings/defs/native/BugReporterSetting.tsx");

export default createToggle;
export { useBugReporterExperimentSettingPredicate };