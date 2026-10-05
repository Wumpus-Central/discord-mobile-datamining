// discord_app/modules/game_profile/GameTagOnVoiceTileExperiment.tsx
import apex_ApexExperimentDefault from "../experiments/apex/ApexExperiment.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj2;
const obj = {
  kind: "user",
  name: "2026-08-game-tag-on-mobile-voice-call-tiles",
  defaultConfig: { showGameTag: false },
  variations: obj2,
};
obj2 = { 1: null };
obj2[1] = { showGameTag: true };
const tmp2 = apex_ApexExperimentDefault(obj);
const result = size.fileFinishedImporting("modules/game_profile/GameTagOnVoiceTileExperiment.tsx");

export default tmp2;
