// === Module 13354: LinuxGpuDecodeExperiment ===

// Module 13354 (LinuxGpuDecodeExperiment)
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

const config = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-09-linux-gpu-decode", defaultConfig: { mode: "all" }, variations: { 0: { mode: "all" }, 1: { mode: "disable_nvidia" }, 2: { mode: "disable_all" } } });
const result = size.fileFinishedImporting("modules/media_engine/LinuxGpuDecodeExperiment.tsx");

export const getLinuxGpuDecodeExperimentConfig = function getLinuxGpuDecodeExperimentConfig(_chooseExperiments) {
  return config.getConfig({ location: _chooseExperiments });
};