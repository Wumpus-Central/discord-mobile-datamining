// === Module 15848: FRAME_BUDGET_MS ===

// Module 15848 (FRAME_BUDGET_MS)
import startFrameMonitor from "startFrameMonitor" /* 15850 */;
import useMountTimerDefault from "useMountTimer" /* 15851 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 15852 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 15853 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 15854 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 15855 */;
import MountMeasureDefault from "MountMeasure" /* 15856 */;
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