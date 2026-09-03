// === Module 15570: FRAME_BUDGET_MS ===

// Module 15570 (FRAME_BUDGET_MS)
import set from "set" /* 2 */;
import FRAME_BUDGET_MS from "FRAME_BUDGET_MS" /* 15572 */;
import useMountTimerDefault from "useMountTimer" /* 15573 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 15574 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 15575 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 15576 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 15577 */;
import MountMeasureDefault from "MountMeasure" /* 15578 */;

const result = set.fileFinishedImporting("modules/devtools/native/components/screens/performance/index.tsx");
for (const key10018 in require("set")) {
  let tmp3 = key10018;
  arg5[key10018] = require("set")[key10018];
  continue;
}

export const FRAME_BUDGET_MS = FRAME_BUDGET_MS.FRAME_BUDGET_MS;
export const startFrameMonitor = FRAME_BUDGET_MS.startFrameMonitor;
export const useMountTimer = useMountTimerDefault;
export const useFrameMonitor = useFrameMonitorDefault;
export const useBenchmarkResults = useBenchmarkResultsDefault;
export const BenchmarkResultsList = BenchmarkResultsListDefault;
export const ScrollBenchmark = ScrollBenchmarkDefault;
export const MountMeasure = MountMeasureDefault;