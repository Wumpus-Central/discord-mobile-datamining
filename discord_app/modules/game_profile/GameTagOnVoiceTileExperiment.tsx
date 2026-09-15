// === Module 17307: GameTagOnVoiceTileExperiment ===

// Module 17307 (GameTagOnVoiceTileExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1435 */;

const obj = { kind: "user", name: "2026-08-game-tag-on-mobile-voice-call-tiles", defaultConfig: { showGameTag: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { showGameTag: true };
obj.variations = obj2;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/GameTagOnVoiceTileExperiment.tsx");

export default apex_ApexExperimentDefault(obj);