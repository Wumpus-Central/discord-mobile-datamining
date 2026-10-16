// discord_app/modules/games/GameSearchRowExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

const apexExperiment = ApexExperiment.createApexExperiment({
  name: "2026-09-game-search-row",
  kind: "user",
  defaultConfig: { extraChromeEnabled: false },
  variations: { 0: { extraChromeEnabled: false }, 1: { extraChromeEnabled: true } },
});
const result = size.fileFinishedImporting("modules/games/GameSearchRowExperiment.tsx");

export default apexExperiment;
