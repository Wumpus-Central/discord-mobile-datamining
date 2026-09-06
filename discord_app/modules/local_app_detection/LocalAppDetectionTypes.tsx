// discord_app/modules/local_app_detection/LocalAppDetectionTypes.tsx
import size from "../../../_runtime/metro/00002__.js";

const obj = {
  ROBLOX: "roblox",
  MINECRAFT: "minecraft",
  FORTNITE: "fortnite",
  GENSHIN: "genshin",
  PUBG_MOBILE: "pubg_mobile",
  CALL_OF_DUTY_MOBILE: "call_of_duty_mobile",
  CLASH_OF_CLANS: "clash_of_clans",
  MOBILE_LEGENDS_BANG_BANG: "mobile_legends_bang_bang",
  GARENA_FREE_FIRE: "garena_free_fire",
  POKEMON_GO: "pokemon_go",
  POKEMON_TCG_POCKET: "pokemon_tcg_pocket",
  CLASH_ROYALE: "clash_royale",
  AMONG_US: "among_us",
  MONOPOLY_GO: "monopoly_go",
  BRAWL_STARS: "brawl_stars",
  BRAWLHALLA: "brawlhalla",
  WUTHERING_WAVES: "wuthering_waves",
};
const values = Object.values(obj);
const result = size.fileFinishedImporting("modules/local_app_detection/LocalAppDetectionTypes.tsx");

export const DetectableAppNames = obj;
export const ALL_DETECTABLE_APP_NAMES = values;
