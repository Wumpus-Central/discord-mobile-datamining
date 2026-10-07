// discord_app/modules/parent_tools/hooks/useIsInAdultAgeGroup.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../_runtime/00576_c.js";
import FamilyCenterStore from "../FamilyCenterStore.tsx";

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useIsInAdultAgeGroup.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(2);
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
      return "adult" === initialize.useStateFromStores(tmp4, tmp5);
    }
  : () => {
      const items = [FamilyCenterStore];
      return "adult" === initialize.useStateFromStores(items, () => ageGroup.getAgeGroup());
    };
