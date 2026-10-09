// discord_app/modules/conjure/debug/useConjureDebugAccess.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../_runtime/00576_c.js";
import UserSettings from "../../user_settings/UserSettings.tsx";
import DeveloperExperimentStore from "../../../stores/DeveloperExperimentStore.tsx";

require = fn;
let c3 = false;
let ReactCompilerGating = fn(558);
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = fn(558);
function useConjureDebugPaneEnabled() {
  const DeveloperMode = UserSettings.DeveloperMode;
  return DeveloperMode.useSetting() || c3;
}
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/conjure/debug/useConjureDebugAccess.tsx");

export { useConjureDebugPaneEnabled };
export const useConjureTraceTabEnabled = ReactCompilerGating.isReactCompilerEnabled()
  ? function useConjureTraceTabEnabled() {
      const cResult = c.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [DeveloperExperimentStore];
        const fn = function t() {
          return isDeveloper.isDeveloper;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = initialize;
      return initialize.useStateFromStores(tmp4, tmp5) || c3;
    }
  : function useConjureTraceTabEnabled() {
      const items = [DeveloperExperimentStore];
      return initialize.useStateFromStores(items, () => isDeveloper.isDeveloper) || c3;
    };
