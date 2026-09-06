// discord_app/modules/media_engine/DisableCameraSimulcastExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj = {
  name: "2026-05-disable-camera-simulcast",
  kind: "user",
  defaultConfig: { enableSimulcast: true },
  variations: null,
};
obj = { 1: null };
obj[1] = { enableSimulcast: false };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/DisableCameraSimulcastExperiment.tsx");

export const DisableCameraSimulcastExperiment = apexExperiment;
