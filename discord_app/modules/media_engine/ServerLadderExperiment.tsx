// discord_app/modules/media_engine/ServerLadderExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj = {
  name: "2026-06-server-ladder",
  kind: "user",
  defaultConfig: { bitrate: 9000000, enabled: false },
  variations: null,
};
obj = { 1: null };
obj[1] = { bitrate: 3500000, enabled: true };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/ServerLadderExperiment.tsx");

export const ServerLadderExperiment = apexExperiment;
