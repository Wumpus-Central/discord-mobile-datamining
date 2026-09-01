// discord_app/modules/media_engine/KrispV9iOSExperiment.tsx
import set from "../../../_runtime/00002_set.js";
import ApexExperiment from "../experiments/apex/index.tsx";

const items = [
  { name: "small_NC_8k", maxSampleRate: 8000, filename: "krisp-nc-o-nb-v2.kef" },
  { name: "small_NC", maxSampleRate: 16000, filename: "krisp-nc-o-lite-v1.kef" },
  { name: "full_NC", maxSampleRate: 96000, filename: "krisp-nc-o-med-v7-fp16.kef" },
];
const obj = { 1: null };
const items1 = [
  { name: "small_NC_8k", maxSampleRate: 8000, filename: "krisp-nc-o-nb-v2.kef" },
  { name: "small_NC_non_optimized", maxSampleRate: 16000, filename: "c6.f.s.laughter.da1785_non_optimized.kef" },
  { name: "full_NC_non_optimized", maxSampleRate: 96000, filename: "krisp-nc-o-med-v7.kef" },
];
obj[1] = { models: items1 };
let closure_0 = ApexExperiment.createApexExperiment({
  kind: "user",
  name: "2026-04-krisp-v9-ios",
  defaultConfig: { models: items },
  variations: obj,
});
const result = set.fileFinishedImporting("modules/media_engine/KrispV9iOSExperiment.tsx");

export const getKrispV9iOSModels = function getKrispV9iOSModels() {
  return config.getConfig({ location: "setupKrisp" }).models;
};
