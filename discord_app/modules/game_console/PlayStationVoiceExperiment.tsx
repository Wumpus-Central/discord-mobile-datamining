// === Module 5230: PlayStationVoiceExperiment ===

// Module 5230 (PlayStationVoiceExperiment)
import getUnitIdDefault from "getUnitId" /* 1368 */;

const obj = { 1: null };
obj[1] = { allowPlayStationStaging: true };
const tmp2 = getUnitIdDefault({ kind: "user", name: "2026-03-churro", defaultConfig: { allowPlayStationStaging: false }, variations: obj });
const result = require("obj132").fileFinishedImporting("modules/game_console/PlayStationVoiceExperiment.tsx");

export const PlayStationVoiceExperiment = tmp2;