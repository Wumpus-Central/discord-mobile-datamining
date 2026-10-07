// discord_app/modules/media_engine/LinuxGpuDecodeExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

const config = ApexExperiment.createApexExperiment({
  kind: "user",
  name: "2026-09-linux-gpu-decode",
  defaultConfig: { mode: "all" },
  variations: { 0: { mode: "all" }, 1: { mode: "disable_nvidia" }, 2: { mode: "disable_all" } },
});
const result = size.fileFinishedImporting("modules/media_engine/LinuxGpuDecodeExperiment.tsx");

export const getLinuxGpuDecodeExperimentConfig = function getLinuxGpuDecodeExperimentConfig(_chooseExperiments) {
  return config.getConfig({ location: _chooseExperiments });
};
