// discord_app/modules/age_gate/ServerNSFWLevelExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj = { name: "2025-09-server-nsfw-level", kind: "user", defaultConfig: { enabled: false }, variations: null };
obj = { 1: null };
obj[1] = { enabled: true };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/age_gate/ServerNSFWLevelExperiment.tsx");

export const ServerNSFWLevelExperiment = apexExperiment;
export const isServerNSFWLevelEnabled = function isServerNSFWLevelEnabled(guild_record) {
  return apexExperiment.getConfig({ location: guild_record }).enabled;
};
