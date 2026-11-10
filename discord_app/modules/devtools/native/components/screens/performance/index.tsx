// === Module 18094: FRAME_BUDGET_MS ===

// Module 18094 (FRAME_BUDGET_MS)
import startFrameMonitor from "startFrameMonitor" /* 18096 */;
import useMountTimerDefault from "useMountTimer" /* 18097 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 18098 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 18099 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 18100 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 18101 */;
import MountMeasureDefault from "MountMeasure" /* 18102 */;
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