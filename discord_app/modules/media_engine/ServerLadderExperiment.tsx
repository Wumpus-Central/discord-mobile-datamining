// discord_app/modules/media_engine/ServerLadderExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj2;
const obj = {
  name: "2026-06-server-ladder",
  kind: "user",
  defaultConfig: { bitrate: 9000000, enabled: false },
  variations: obj2,
};
obj2 = { 1: null };
obj2[1] = { bitrate: 3500000, enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/ServerLadderExperiment.tsx");

export const ServerLadderExperiment = apexExperiment;
