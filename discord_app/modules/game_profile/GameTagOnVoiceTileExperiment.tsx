// === Module 17158: GameTagOnVoiceTileExperiment ===

// Module 17158 (GameTagOnVoiceTileExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1434 */;

let obj = { kind: "user", name: "2026-08-game-tag-on-mobile-voice-call-tiles", defaultConfig: { showGameTag: false }, variations: null };
obj = { 1: null };
obj[1] = { showGameTag: true };
obj.variations = obj;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/GameTagOnVoiceTileExperiment.tsx");

export default apex_ApexExperimentDefault(obj);