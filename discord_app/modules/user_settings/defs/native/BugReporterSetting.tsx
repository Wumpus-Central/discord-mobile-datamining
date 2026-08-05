// discord_app/modules/user_settings/defs/native/BugReporterSetting.tsx
import zustandStore from "zustandStore";
import createToggle from "createToggle";
import { asyncRequireImpl } from "../../../../../_runtime/01959_asyncRequireImpl.js";
import { ModalActionCreators } from "../../../../actions/ModalActionCreators.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { apexExperiment } from "../../../bug_reporter/BugReporterExperiment.tsx";

const require = arg1;
function useBugReporterExperimentSettingPredicate() {
  return apexExperiment.useConfig({ location: "native-settings" }).hasBugReporterAccess;
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
      ModalActionCreators.pushLazy(asyncRequireImpl(9753, dependencyMap.paths));
      const obj2 = ModalActionCreators;
    }
  },
  withArrow: true,
  usePredicate: useBugReporterExperimentSettingPredicate
};
createToggle = createToggle.createPressable(createToggle);
const result = require("handleClose").fileFinishedImporting("modules/user_settings/defs/native/BugReporterSetting.tsx");

export default createToggle;
export { useBugReporterExperimentSettingPredicate };