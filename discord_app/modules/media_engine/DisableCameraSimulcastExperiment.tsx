// discord_app/modules/media_engine/DisableCameraSimulcastExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj2;
const obj = {
  name: "2026-05-disable-camera-simulcast",
  kind: "user",
  defaultConfig: { enableSimulcast: true },
  variations: obj2,
};
obj2 = { 1: null };
obj2[1] = { enableSimulcast: false };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/DisableCameraSimulcastExperiment.tsx");

export const DisableCameraSimulcastExperiment = apexExperiment;
