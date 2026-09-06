// === Module 13714: GameCommunityUpsellExperiment ===

// Module 13714 (GameCommunityUpsellExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-08-game-community-add-server-entry", kind: "user", defaultConfig: { enabled: false, cardAction: "join" }, variations: null };
obj = { 1: null, 2: { enabled: true, cardAction: "join" } };
obj[2] = { enabled: true, cardAction: "preview" };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/game_community_upsell/native/GameCommunityUpsellExperiment.tsx");

export const GAME_COMMUNITY_ADD_SERVER_ENTRY_EXPERIMENT = "2026-08-game-community-add-server-entry";
export const GameCommunityAddServerEntryExperiment = apexExperiment;