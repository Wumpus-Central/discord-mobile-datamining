// discord_app/modules/devtools/native/components/screens/performance/index.tsx
import set from "set" /* 2 */;
import FRAME_BUDGET_MS from "FRAME_BUDGET_MS" /* 15183 */;
import useMountTimerDefault from "useMountTimer" /* 15184 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 15185 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 15186 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 15187 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 15188 */;
import MountMeasureDefault from "MountMeasure" /* 15189 */;

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