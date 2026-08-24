// === Module 9163: apexExperiment ===

// Module 9163 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const obj = { enabled: false, dense: false };
const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-06-similar-games-desktop", defaultConfig: obj, variations: { 0: obj, 1: { enabled: true, dense: true }, 2: { enabled: true, dense: false } } });
const apexExperiment1 = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-06-similar-games-mobile", defaultConfig: obj, variations: { 0: obj, 1: { enabled: true, dense: true }, 2: { enabled: true, dense: false } } });
const result = set.fileFinishedImporting("modules/game_profile/SimilarGamesExperiments.tsx");

export const GameProfileSimilarGamesDesktopExperiment = apexExperiment;
export const GameProfileSimilarGamesMobileExperiment = apexExperiment1;