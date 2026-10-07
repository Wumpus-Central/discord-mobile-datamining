// discord_app/modules/user_settings/dev_tools/native/useIsStaffOrDeveloperSettingPredicate.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../_runtime/00576_c.js";
import DeveloperExperimentStore from "../../../../stores/DeveloperExperimentStore.tsx";

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/dev_tools/native/useIsStaffOrDeveloperSettingPredicate.tsx",
);

export const useStaffOrDeveloperSettingPredicate = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [DeveloperExperimentStore];
        const fn = function s() {
          return isDeveloper.isDeveloper;
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
  : () => {
      const items = [DeveloperExperimentStore];
      return initialize.useStateFromStores(items, () => isDeveloper.isDeveloper);
    };
