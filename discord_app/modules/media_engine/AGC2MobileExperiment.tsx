// discord_app/modules/media_engine/AGC2MobileExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

const obj = {
  kind: "user",
  name: "2026-09-agc2-mobile",
  defaultConfig: { agc2Enabled: false, noiseCancellationDuringProcessing: false, vadKrispActivationThreshold: 0.5 },
  variations: null,
};
const obj2 = {
  1: null,
  2: { agc2Enabled: true, noiseCancellationDuringProcessing: true, vadKrispActivationThreshold: 0.4 },
  3: { agc2Enabled: true, noiseCancellationDuringProcessing: true, vadKrispActivationThreshold: 0.5 },
  4: { agc2Enabled: true, noiseCancellationDuringProcessing: true, vadKrispActivationThreshold: 0.6 },
};
obj2[4] = { agc2Enabled: true, noiseCancellationDuringProcessing: true, vadKrispActivationThreshold: 0.7 };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/AGC2MobileExperiment.tsx");

export default apexExperiment;
