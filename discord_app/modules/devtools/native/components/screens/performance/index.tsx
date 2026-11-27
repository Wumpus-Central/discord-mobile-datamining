// === Module 17375: FRAME_BUDGET_MS ===

// Module 17375 (FRAME_BUDGET_MS)
import startFrameMonitor from "startFrameMonitor" /* 17377 */;
import useMountTimerDefault from "useMountTimer" /* 17378 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 17379 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 17380 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 17381 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 17382 */;
import MountMeasureDefault from "MountMeasure" /* 17383 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const result = size.fileFinishedImporting("modules/devtools/native/components/screens/performance/index.tsx");
for (const key10018 in require("types")) {
  arg5[key10018] = require("types")[key10018];
  continue;
}

export const FRAME_BUDGET_MS = startFrameMonitor.FRAME_BUDGET_MS;
export const startFrameMonitor = startFrameMonitor.startFrameMonitor;
export const useMountTimer = useMountTimerDefault;
export const useFrameMonitor = useFrameMonitorDefault;
export const useBenchmarkResults = useBenchmarkResultsDefault;
export const BenchmarkResultsList = BenchmarkResultsListDefault;
export const ScrollBenchmark = ScrollBenchmarkDefault;
export const MountMeasure = MountMeasureDefault;