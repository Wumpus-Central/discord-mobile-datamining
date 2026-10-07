// discord_app/modules/games/GameSearchRowExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

const obj = {
  name: "2026-09-game-search-row",
  kind: "user",
  defaultConfig: { extraChromeEnabled: false },
  variations: null,
};
const obj2 = { 1: null };
obj2[1] = { extraChromeEnabled: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/games/GameSearchRowExperiment.tsx");

export default apexExperiment;
