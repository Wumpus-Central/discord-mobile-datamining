// === Module 15819: FRAME_BUDGET_MS ===

// Module 15819 (FRAME_BUDGET_MS)
import startFrameMonitor from "startFrameMonitor" /* 15821 */;
import useMountTimerDefault from "useMountTimer" /* 15822 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 15823 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 15824 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 15825 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 15826 */;
import MountMeasureDefault from "MountMeasure" /* 15827 */;
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