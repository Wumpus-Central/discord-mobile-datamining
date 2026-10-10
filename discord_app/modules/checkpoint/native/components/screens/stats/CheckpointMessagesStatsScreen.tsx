// === Module 16004: CheckpointMessagesStatsScreen ===

// Module 16004 (CheckpointMessagesStatsScreen)
import jsxProd from "jsxProd" /* 21 */;
import c from "c" /* 576 */;
import CheckpointStatsScreenDefault from "CheckpointStatsScreen" /* 16005 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointMessagesStatsScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointMessagesStatsScreen() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp6 = jsx(CheckpointStatsScreenDefault, { name: "Messages" });
    cResult[0] = tmp6;
    let first = tmp6;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function CheckpointMessagesStatsScreen() {
  return jsx(CheckpointStatsScreenDefault, { name: "Messages" });
});