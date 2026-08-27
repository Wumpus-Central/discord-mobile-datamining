// === Module 16652: getUnitId ===

// Module 16652 (getUnitId)
import getUnitIdDefault from "getUnitId" /* 1368 */;

const obj = { 1: null };
obj[1] = { showGameTag: true };
const tmp2 = getUnitIdDefault({ kind: "user", name: "2026-08-game-tag-on-mobile-voice-call-tiles", defaultConfig: { showGameTag: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/game_profile/GameTagOnVoiceTileExperiment.tsx");

export default tmp2;