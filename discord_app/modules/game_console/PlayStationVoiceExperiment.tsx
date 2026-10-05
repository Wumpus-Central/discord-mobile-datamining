// discord_app/modules/game_console/PlayStationVoiceExperiment.tsx
import apex_ApexExperimentDefault from "../experiments/apex/ApexExperiment.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj2;
const obj = {
  kind: "user",
  name: "2026-03-churro",
  defaultConfig: { allowPlayStationStaging: false },
  variations: obj2,
};
obj2 = { 1: null };
obj2[1] = { allowPlayStationStaging: true };
const tmp2 = apex_ApexExperimentDefault(obj);
const result = size.fileFinishedImporting("modules/game_console/PlayStationVoiceExperiment.tsx");

export const PlayStationVoiceExperiment = tmp2;
