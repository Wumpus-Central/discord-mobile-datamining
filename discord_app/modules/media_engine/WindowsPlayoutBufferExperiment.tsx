// discord_app/modules/media_engine/WindowsPlayoutBufferExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

const obj = {
  kind: "user",
  name: "2026-10-windows-playout-buffer-duration",
  defaultConfig: { windowsOutputBufferDurationMs: null },
  variations: null,
};
const obj2 = {
  1: null,
  2: { windowsOutputBufferDurationMs: 30 },
  3: { windowsOutputBufferDurationMs: 40 },
  4: { windowsOutputBufferDurationMs: 50 },
};
obj2[4] = { windowsOutputBufferDurationMs: 60 };
obj.variations = obj2;
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/WindowsPlayoutBufferExperiment.tsx");

export function getWindowsPlayoutBufferExperimentConfig(location) {
  return config.getConfig({ location: location.location });
}
