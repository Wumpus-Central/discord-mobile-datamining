// discord_app/modules/user_settings/dev_tools/native/useIsStaffOrDeveloperSettingPredicate.tsx
import get_initialized from "../../../../../discord_common/js/packages/flux/index.tsx";
import react from "../../../../../_runtime/00576_react.js";
import DeveloperExperimentStore from "../../../../stores/DeveloperExperimentStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let isDeveloper;
      let tmp4;
      let tmp5;
      const obj = react;
      const cResult = obj.c(2);
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
      const tmpResult = get_initialized;
      return tmpResult.useStateFromStores(tmp4, tmp5);
    }
  : () => {
      let isDeveloper;
      const items = [DeveloperExperimentStore];
      const obj = get_initialized;
      return obj.useStateFromStores(items, () => isDeveloper.isDeveloper);
    };
const result = size.fileFinishedImporting(
  "modules/user_settings/dev_tools/native/useIsStaffOrDeveloperSettingPredicate.tsx",
);

export const useStaffOrDeveloperSettingPredicate = tmp2;
