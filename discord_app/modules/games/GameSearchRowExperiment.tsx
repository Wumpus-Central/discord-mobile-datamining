// discord_app/modules/games/GameSearchRowExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj2;
const obj = {
  name: "2026-09-game-search-row",
  kind: "user",
  defaultConfig: { extraChromeEnabled: false },
  variations: obj2,
};
obj2 = { 1: null };
obj2[1] = { extraChromeEnabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/games/GameSearchRowExperiment.tsx");

export default apexExperiment;
