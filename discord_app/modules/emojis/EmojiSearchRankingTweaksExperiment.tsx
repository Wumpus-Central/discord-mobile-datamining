// discord_app/modules/emojis/EmojiSearchRankingTweaksExperiment.tsx
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { boostFavorites: true, boostCapitalizedWords: true, boostAtEnd: true, boostsIgnoreDisambiguators: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2025-10-emoji-search-ranking-tweaks", kind: "user", defaultConfig: { boostFavorites: false, boostCapitalizedWords: false, boostAtEnd: false, boostsIgnoreDisambiguators: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/emojis/EmojiSearchRankingTweaksExperiment.tsx");

export default apexExperiment;