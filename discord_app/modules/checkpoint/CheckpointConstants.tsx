// discord_app/modules/checkpoint/CheckpointConstants.tsx
import _modDef3248 from "Checkpoint2026.messages.js";

const items = [{ list: "gamesByPlayers", label: _modDef3248.b4s18j }, , ,];
const obj = { list: "gamesByPlayers", label: _modDef3248.b4s18j };
items[1] = { list: "newGamesByPlayers", label: _modDef3248.DcxpNj };
const obj2 = { list: "newGamesByPlayers", label: _modDef3248.DcxpNj };
items[2] = { list: "indieGamesByPlayers", label: _modDef3248.OAUTki };
const obj3 = { list: "indieGamesByPlayers", label: _modDef3248.OAUTki };
items[3] = { list: "gamesByStreamWatchMinutes", label: _modDef3248.M1L00s };
const obj5 = {
  [fn(6225).CheckpointTraitRarity.DEFAULT]: "#FFE047",
  [fn(6225).CheckpointTraitRarity.COMMON]: "#35ED7E",
  [fn(6225).CheckpointTraitRarity.RARE]: "#EF3054",
  [fn(6225).CheckpointTraitRarity.EPIC]: "#7D53DE",
  [fn(6225).CheckpointTraitRarity.ULTRA]: "#FC7A1E",
};
obj5[fn(6225).CheckpointTraitRarity.NITRO] = "url(#" + "checkpointRarityBadgeNitroGradient" + ")";
const obj6 = {};
obj6[fn(6225).CheckpointTraitRarity.DEFAULT] = _modDef3248.bP4GV1;
obj6[fn(6225).CheckpointTraitRarity.COMMON] = _modDef3248.QwkKWr;
obj6[fn(6225).CheckpointTraitRarity.RARE] = _modDef3248.KLmNgL;
obj6[fn(6225).CheckpointTraitRarity.EPIC] = _modDef3248.hAmdLZ;
obj6[fn(6225).CheckpointTraitRarity.ULTRA] = _modDef3248.Tv4xyf;
obj6[fn(6225).CheckpointTraitRarity.NITRO] = _modDef3248["0ModIv"];
const items1 = [
  fn(6225).CheckpointTraitRarity.ULTRA,
  fn(6225).CheckpointTraitRarity.EPIC,
  fn(6225).CheckpointTraitRarity.RARE,
  fn(6225).CheckpointTraitRarity.COMMON,
  fn(6225).CheckpointTraitRarity.DEFAULT,
  fn(6225).CheckpointTraitRarity.NITRO,
];
const items2 = [
  fn(6225).CheckpointTraitRarity.DEFAULT,
  fn(6225).CheckpointTraitRarity.COMMON,
  fn(6225).CheckpointTraitRarity.RARE,
  fn(6225).CheckpointTraitRarity.EPIC,
  fn(6225).CheckpointTraitRarity.ULTRA,
  fn(6225).CheckpointTraitRarity.NITRO,
];
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/CheckpointConstants.tsx");

export const CheckpointVersions = { V2025: 0, [0]: "V2025", V2026: 1, [1]: "V2026" };
export const CHECKPOINT_PRIMARY = "#34E2F1";
export const CHECKPOINT_WHITE = "#DFDFDF";
export const CHECKPOINT_YELLOW = "#FFE047";
export const CHECKPOINT_GREEN = "#35ED7E";
export const CHECKPOINT_PINK = "#EF3054";
export const CHECKPOINT_PURPLE = "#7D53DE";
export const CHECKPOINT_ORANGE = "#FC7A1E";
export const CHECKPOINT_DARK_CYAN = "#1482A7";
export const CHECKPOINT_BUTTON_SHADOW = "#3FC7D2";
export const CHECKPOINT_BUTTON_DISABLED_BORDER_MOBILE = "#1E1E20";
export const CHECKPOINT_GUILD_CARD_BACKGROUND = "#04363ABF";
export const CHECKPOINT_WEB_BACKGROUND_GRADIENT_START = "#3BD4F2";
export const CHECKPOINT_NITRO_GRADIENT_COLORS = ["#DFDFDF", "#5E5E5E"];
export const CHECKPOINT_NITRO_BADGE_GRADIENT_ID = "checkpointRarityBadgeNitroGradient";
export const CHECKPOINT_BACKGROUND_GRADIENT = ["#12606D", "#0B1624"];
export const CHECKPOINT_GLOBAL_GAME_CATEGORIES = items;
export const CHECKPOINT_NAV_HEIGHT = 64;
export const CHECKPOINT_CONTROL_SIZE = 48;
export const CHECKPOINT_CONTENT_MAX_WIDTH = 480;
export const CHECKPOINT_CONTENT_MAX_HEIGHT = 840;
export const CHECKPOINT_LOGO_SIZE = 40;
export const TRAIT_OPTION_WIDTH = 72;
export const TRAIT_OPTION_HEIGHT = 80;
export const NATIVE_CHARACTER_LAYER_SIZE = 224;
export const CHECKPOINT_2026_POWER_BAR_UNITS = 6;
export const CHECKPOINT_2026_POWER_BAR_MIN_FILLED_UNITS = 1;
export const CHECKPOINT_2026_POWER_BAR_MAX_FILLED_UNITS = 5;
export const CHECKPOINT_RARITY_TO_COLOR = obj5;
export const CHECKPOINT_RARITY_TO_LABEL_MESSAGE = obj6;
export const CHECKPOINT_RARITY_ORDER_MOBILE = items1;
export const CHECKPOINT_RARITY_ORDER_WEB = items2;
