// discord_app/modules/game_console/PlayStationVoiceExperiment.tsx
import apex_ApexExperimentDefault from "../experiments/apex/ApexExperiment.tsx";

let obj = { kind: "user", name: "2026-03-churro", defaultConfig: { allowPlayStationStaging: false }, variations: null };
obj = { 1: null };
obj[1] = { allowPlayStationStaging: true };
obj.variations = obj;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_console/PlayStationVoiceExperiment.tsx");

export const PlayStationVoiceExperiment = apex_ApexExperimentDefault(obj);
