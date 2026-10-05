// === Module 17298: GameTagOnVoiceTileExperiment ===

// Module 17298 (GameTagOnVoiceTileExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1441 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { kind: "user", name: "2026-08-game-tag-on-mobile-voice-call-tiles", defaultConfig: { showGameTag: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { showGameTag: true };
const tmp2 = apex_ApexExperimentDefault(obj);
const result = size.fileFinishedImporting("modules/game_profile/GameTagOnVoiceTileExperiment.tsx");

export default tmp2;