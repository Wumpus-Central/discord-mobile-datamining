// discord_app/modules/checkpoint/native/components/screens/stats/CheckpointSquadStatsScreen.tsx
import jsxProd from "../../../../../../../_runtime/react/00021_jsxProd.js";
import c from "../../../../../../../_runtime/00576_c.js";
import CheckpointStatsScreenDefault from "CheckpointStatsScreen.tsx";
import ReactCompilerGating from "../../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting(
  "modules/checkpoint/native/components/screens/stats/CheckpointSquadStatsScreen.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp6 = jsx(CheckpointStatsScreenDefault, { name: "Squad" });
        cResult[0] = tmp6;
        let first = tmp6;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : () => jsx(CheckpointStatsScreenDefault, { name: "Squad" });
