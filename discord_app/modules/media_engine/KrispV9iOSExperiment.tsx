// discord_app/modules/media_engine/KrispV9iOSExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj = { kind: "user", name: "2026-04-krisp-v9-ios", defaultConfig: null, variations: null };
obj = { models: null };
const items = [
  { name: "small_NC_8k", maxSampleRate: 8000, filename: "krisp-nc-o-nb-v2.kef" },
  { name: "small_NC", maxSampleRate: 16000, filename: "krisp-nc-o-lite-v1.kef" },
  { name: "full_NC", maxSampleRate: 96000, filename: "krisp-nc-o-med-v7-fp16.kef" },
];
obj.models = items;
obj.defaultConfig = obj;
const obj1 = { 1: null };
const obj2 = { models: null };
const items1 = [
  { name: "small_NC_8k", maxSampleRate: 8000, filename: "krisp-nc-o-nb-v2.kef" },
  { name: "small_NC_non_optimized", maxSampleRate: 16000, filename: "c6.f.s.laughter.da1785_non_optimized.kef" },
  { name: "full_NC_non_optimized", maxSampleRate: 96000, filename: "krisp-nc-o-med-v7.kef" },
];
obj2.models = items1;
obj1[1] = obj2;
obj.variations = obj1;
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/KrispV9iOSExperiment.tsx");

export const getKrispV9iOSModels = function getKrispV9iOSModels() {
  return config.getConfig({ location: "setupKrisp" }).models;
};
