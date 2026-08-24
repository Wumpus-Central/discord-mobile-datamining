// === Module 7295: apexExperiment ===

// Module 7295 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-07-game-mentions-v2-mobile", kind: "user", defaultConfig: { enabled: false, showNewTag: false, combineMentionAutocomplete: false }, variations: { 0: { enabled: false, showNewTag: false, combineMentionAutocomplete: false }, 1: { enabled: true, showNewTag: true, combineMentionAutocomplete: false }, 2: { enabled: true, showNewTag: false, combineMentionAutocomplete: false }, 3: { enabled: true, showNewTag: false, combineMentionAutocomplete: true } } });
const result = set.fileFinishedImporting("modules/game_mentions/GameMentionsMobileExperiment.tsx");

export const GameMentionsMobileExperiment = apexExperiment;