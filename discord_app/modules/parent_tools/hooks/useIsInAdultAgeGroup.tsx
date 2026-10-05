// discord_app/modules/parent_tools/hooks/useIsInAdultAgeGroup.tsx
import get_initialized from "../../../../discord_common/js/packages/flux/index.tsx";
import react from "../../../../_runtime/00576_react.js";
import FamilyCenterStore from "../FamilyCenterStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let ageGroup;
      let tmp4;
      let tmp5;
      const obj = react;
      const cResult = obj.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [FamilyCenterStore];
        const fn = function u() {
          return ageGroup.getAgeGroup();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = get_initialized;
      return "adult" === tmpResult.useStateFromStores(tmp4, tmp5);
    }
  : () => {
      let ageGroup;
      const items = [FamilyCenterStore];
      const obj = get_initialized;
      return "adult" === obj.useStateFromStores(items, () => ageGroup.getAgeGroup());
    };
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useIsInAdultAgeGroup.tsx");

export default tmp2;
