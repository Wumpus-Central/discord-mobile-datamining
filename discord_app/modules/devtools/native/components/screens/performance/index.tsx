// === Module 15610: FRAME_BUDGET_MS ===

// Module 15610 (FRAME_BUDGET_MS)
import types from "types" /* 15611 */;
import startFrameMonitor from "startFrameMonitor" /* 15612 */;
import useMountTimerDefault from "useMountTimer" /* 15613 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 15614 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 15615 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 15616 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 15617 */;
import MountMeasureDefault from "MountMeasure" /* 15618 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/devtools/native/components/screens/performance/index.tsx");
for (const key10018 in types) {
  exports[key10018] = types[key10018];
  continue;
}
const startFrameMonitor_export = startFrameMonitor.startFrameMonitor;

export const FRAME_BUDGET_MS = startFrameMonitor.FRAME_BUDGET_MS;
export { startFrameMonitor_export as startFrameMonitor };
export const useMountTimer = useMountTimerDefault;
export const useFrameMonitor = useFrameMonitorDefault;
export const useBenchmarkResults = useBenchmarkResultsDefault;
export const BenchmarkResultsList = BenchmarkResultsListDefault;
export const ScrollBenchmark = ScrollBenchmarkDefault;
export const MountMeasure = MountMeasureDefault;