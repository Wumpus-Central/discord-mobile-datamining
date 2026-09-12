// === Module 14088: AGC2MobileExperiment ===

// Module 14088 (AGC2MobileExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

let obj = { kind: "user", name: "2026-09-agc2-mobile", defaultConfig: { agc2Enabled: false, noiseCancellationDuringProcessing: false, vadKrispActivationThreshold: 0.5 }, variations: null };
obj = { 1: null, 2: { agc2Enabled: true, noiseCancellationDuringProcessing: true, vadKrispActivationThreshold: 0.4 }, 3: { agc2Enabled: true, noiseCancellationDuringProcessing: true, vadKrispActivationThreshold: 0.5 }, 4: { agc2Enabled: true, noiseCancellationDuringProcessing: true, vadKrispActivationThreshold: 0.6 } };
obj[4] = { agc2Enabled: true, noiseCancellationDuringProcessing: true, vadKrispActivationThreshold: 0.7 };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/AGC2MobileExperiment.tsx");

export default apexExperiment;