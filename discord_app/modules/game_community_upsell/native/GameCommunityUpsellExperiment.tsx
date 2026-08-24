// === Module 13319: GAME_COMMUNITY_ADD_SERVER_ENTRY_EXPERIMENT ===

// Module 13319 (GAME_COMMUNITY_ADD_SERVER_ENTRY_EXPERIMENT)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const obj = { 1: null, 2: { enabled: true, cardAction: "join" } };
obj[2] = { enabled: true, cardAction: "preview" };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-08-game-community-add-server-entry", kind: "user", defaultConfig: { enabled: false, cardAction: "join" }, variations: obj });
const result = set.fileFinishedImporting("modules/game_community_upsell/native/GameCommunityUpsellExperiment.tsx");

export const GAME_COMMUNITY_ADD_SERVER_ENTRY_EXPERIMENT = "2026-08-game-community-add-server-entry";
export const GameCommunityAddServerEntryExperiment = apexExperiment;