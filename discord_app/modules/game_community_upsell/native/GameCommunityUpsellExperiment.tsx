// discord_app/modules/game_community_upsell/native/GameCommunityUpsellExperiment.tsx
import ApexExperiment from "ApexExperiment";

const obj = { 1: null, 2: { enabled: true, visualVariant: "one-column" } };
obj[2] = { enabled: true, visualVariant: "two-column" };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-02-game-community-upsell-multi", kind: "user", defaultConfig: { enabled: false, visualVariant: "one-column" }, variations: obj });
const result = require("set").fileFinishedImporting("modules/game_community_upsell/native/GameCommunityUpsellExperiment.tsx");

export const GAME_COMMUNITY_UPSELL_MULTI_EXPERIMENT = "2026-02-game-community-upsell-multi";
export const GameCommunityUpsellMultiExperiment = apexExperiment;