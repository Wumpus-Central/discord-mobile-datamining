// === Module 18023: FRAME_BUDGET_MS ===

// Module 18023 (FRAME_BUDGET_MS)
import startFrameMonitor from "startFrameMonitor" /* 18025 */;
import useMountTimerDefault from "useMountTimer" /* 18026 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 18027 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 18028 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 18029 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 18030 */;
import MountMeasureDefault from "MountMeasure" /* 18031 */;
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