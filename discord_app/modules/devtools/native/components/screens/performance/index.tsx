// === Module 16742: FRAME_BUDGET_MS ===

// Module 16742 (FRAME_BUDGET_MS)
import startFrameMonitor from "startFrameMonitor" /* 16744 */;
import useMountTimerDefault from "useMountTimer" /* 16745 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 16746 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 16747 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 16748 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 16749 */;
import MountMeasureDefault from "MountMeasure" /* 16750 */;
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