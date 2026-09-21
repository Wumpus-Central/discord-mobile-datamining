// === Module 7748: PlayStationVoiceExperiment ===

// Module 7748 (PlayStationVoiceExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1435 */;

const obj = { kind: "user", name: "2026-03-churro", defaultConfig: { allowPlayStationStaging: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { allowPlayStationStaging: true };
obj.variations = obj2;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_console/PlayStationVoiceExperiment.tsx");

export const PlayStationVoiceExperiment = apex_ApexExperimentDefault(obj);