// discord_app/modules/user_settings/defs/native/CreateBugReportSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import DeveloperOptionsActionCreators from "../../../../actions/DeveloperOptionsActionCreators.tsx";
import BugReportManagerDefault from "../../../bug_reporter/native/BugReportManager.tsx";
import DeveloperOptionsStore from "../../../../stores/DeveloperOptionsStore.tsx";

require = fn;
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(10629);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useCreateBugReportSettingToggleValue() {
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
    }
  : function useCreateBugReportSettingToggleValue() {
      const items = [DeveloperOptionsStore];
      return initialize.useStateFromStores(items, () => isBugReporterEnabled.isBugReporterEnabled);
    };
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.aIkGJD);
  },
  parent: null,
  IconComponent: fn(15779).WrenchIcon,
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
  useValue: ReactCompilerGating.isReactCompilerEnabled()
    ? function useCreateBugReportSettingToggleValue() {
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
      }
    : function useCreateBugReportSettingToggleValue() {
        const items = [DeveloperOptionsStore];
        return initialize.useStateFromStores(items, () => isBugReporterEnabled.isBugReporterEnabled);
      },
  useDescription: function useCreateBugReportSettingDescription() {
    return "Photo permission is required";
  },
  usePredicate: fn(16030).useBugReporterExperimentSettingPredicate,
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/CreateBugReportSetting.tsx");

export default toggle;
