// discord_app/modules/devtools/native/components/screens/performance/index.tsx
import FRAME_BUDGET_MS from "startFrameMonitor.tsx";
import useMountTimerDefault from "useMountTimer.tsx";
import useFrameMonitorDefault from "useFrameMonitor.tsx";
import useBenchmarkResultsDefault from "useBenchmarkResults.tsx";
import BenchmarkResultsListDefault from "BenchmarkResultsList.tsx";
import ScrollBenchmarkDefault from "ScrollBenchmark.tsx";
import MountMeasureDefault from "MountMeasure.tsx";
import obj132 from "../../../../../../../_runtime/00002_obj132.js";

const result = obj132.fileFinishedImporting("modules/devtools/native/components/screens/performance/index.tsx");
for (const key10018 in require("obj132")) {
  arg5[key10018] = require("obj132")[key10018];
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