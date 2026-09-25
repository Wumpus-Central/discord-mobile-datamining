// === Module 15306: FRAME_BUDGET_MS ===

// Module 15306 (FRAME_BUDGET_MS)
import startFrameMonitor from "startFrameMonitor" /* 15308 */;
import useMountTimerDefault from "useMountTimer" /* 15309 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 15310 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 15311 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 15312 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 15313 */;
import MountMeasureDefault from "MountMeasure" /* 15314 */;
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