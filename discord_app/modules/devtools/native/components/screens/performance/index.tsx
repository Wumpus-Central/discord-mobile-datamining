// === Module 16728: FRAME_BUDGET_MS ===

// Module 16728 (FRAME_BUDGET_MS)
import startFrameMonitor from "startFrameMonitor" /* 16730 */;
import useMountTimerDefault from "useMountTimer" /* 16731 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 16732 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 16733 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 16734 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 16735 */;
import MountMeasureDefault from "MountMeasure" /* 16736 */;
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