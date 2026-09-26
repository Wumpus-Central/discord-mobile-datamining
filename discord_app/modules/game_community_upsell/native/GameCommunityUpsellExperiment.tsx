// === Module 13260: GameCommunityUpsellExperiment ===

// Module 13260 (GameCommunityUpsellExperiment)
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-08-game-community-add-server-entry", kind: "user", defaultConfig: { enabled: false, cardAction: "join" }, variations: null };
const obj2 = { 1: null, 2: { enabled: true, cardAction: "join" } };
obj2[2] = { enabled: true, cardAction: "preview" };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/game_community_upsell/native/GameCommunityUpsellExperiment.tsx");

export const GAME_COMMUNITY_ADD_SERVER_ENTRY_EXPERIMENT = "2026-08-game-community-add-server-entry";
export const GameCommunityAddServerEntryExperiment = apexExperiment;