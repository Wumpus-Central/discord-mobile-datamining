// discord_app/modules/user_settings/defs/native/BugReporterSetting.tsx
import getSystemLocale from "../../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../../_runtime/02008_asyncRequireImpl.js";
import _modDef4724 from "../../../../actions/ModalActionCreators.tsx";
import apexExperimentDefault from "../../../bug_reporter/BugReporterExperiment.tsx";
import closure_3 from "../../../bug_reporter/BugReportStore.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";

require = arg1;
function useBugReporterExperimentSettingPredicate() {
  return apexExperimentDefault.useConfig({ location: "native-settings" }).hasBugReporterAccess;
}
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["/tZh0A"]);
  },
  parent: null,
  IconComponent: require("BugIcon").BugIcon,
  onPress: function handleBugReporterSettingPress() {
    if (!field.getField("isReportOpen")) {
      field.setState({ isReportOpen: true });
      _modDef4724.pushLazy(asyncRequireImpl(10294, dependencyMap.paths));
      const obj2 = _modDef4724;
    }
  },
  withArrow: true,
  usePredicate: useBugReporterExperimentSettingPredicate,
};
createToggle = createToggle.createPressable(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/BugReporterSetting.tsx");

export default createToggle;
export { useBugReporterExperimentSettingPredicate };
