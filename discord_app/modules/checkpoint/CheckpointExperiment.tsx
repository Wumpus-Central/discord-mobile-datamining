// discord_app/modules/checkpoint/CheckpointExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_0 = ApexExperiment.createApexExperiment({
  name: "2026-09-build-a-bear",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
});
const result = size.fileFinishedImporting("modules/checkpoint/CheckpointExperiment.tsx");

export const useIsCheckpointEnabled = function useIsCheckpointEnabled(DevToolsQuickActionsScreen) {
  return closure_0.useConfig({ location: DevToolsQuickActionsScreen }).enabled;
};
