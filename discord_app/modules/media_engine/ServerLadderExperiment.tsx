// discord_app/modules/media_engine/ServerLadderExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

const obj = {
  name: "2026-06-server-ladder",
  kind: "user",
  defaultConfig: { bitrate: 9000000, enabled: false },
  variations: null,
};
const obj2 = { 1: null };
obj2[1] = { bitrate: 3500000, enabled: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/ServerLadderExperiment.tsx");

export const ServerLadderExperiment = apexExperiment;
