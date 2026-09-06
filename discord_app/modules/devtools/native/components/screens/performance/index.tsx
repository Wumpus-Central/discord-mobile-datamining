// discord_app/modules/devtools/native/components/screens/performance/index.tsx
import startFrameMonitor from "startFrameMonitor.tsx";
import useMountTimerDefault from "useMountTimer.tsx";
import useFrameMonitorDefault from "useFrameMonitor.tsx";
import useBenchmarkResultsDefault from "useBenchmarkResults.tsx";
import BenchmarkResultsListDefault from "BenchmarkResultsList.tsx";
import ScrollBenchmarkDefault from "ScrollBenchmark.tsx";
import MountMeasureDefault from "MountMeasure.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

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
