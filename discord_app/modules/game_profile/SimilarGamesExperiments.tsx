// discord_app/modules/game_profile/SimilarGamesExperiments.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import ApexExperiment from "../experiments/apex/index.tsx";

const obj = { enabled: false, dense: false };
const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-06-similar-games-desktop", defaultConfig: obj, variations: { 0: obj, 1: { enabled: true, dense: true }, 2: { enabled: true, dense: false } } });
const apexExperiment1 = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-06-similar-games-mobile", defaultConfig: obj, variations: { 0: obj, 1: { enabled: true, dense: true }, 2: { enabled: true, dense: false } } });
const result = obj132.fileFinishedImporting("modules/game_profile/SimilarGamesExperiments.tsx");

export const GameProfileSimilarGamesDesktopExperiment = apexExperiment;
export const GameProfileSimilarGamesMobileExperiment = apexExperiment1;