// === Module 15538: CheckpointVoiceStatsScreen ===

// Module 15538 (CheckpointVoiceStatsScreen)
import jsxProd from "jsxProd" /* 21 */;
import c from "c" /* 576 */;
import CheckpointStatsScreenDefault from "CheckpointStatsScreen" /* 15539 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointVoiceStatsScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp6 = jsx(CheckpointStatsScreenDefault, { name: "Voice" });
    cResult[0] = tmp6;
    let first = tmp6;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => jsx(CheckpointStatsScreenDefault, { name: "Voice" }));