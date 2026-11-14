// discord_app/modules/checkpoint/CheckpointConstants.tsx
import _modDef3317 from "Checkpoint2026.messages.js";

const items = [{ list: "gamesByPlayers", label: _modDef3317.b4s18j }, , ,];
const obj = { list: "gamesByPlayers", label: _modDef3317.b4s18j };
items[1] = { list: "newGamesByPlayers", label: _modDef3317.DcxpNj };
const obj2 = { list: "newGamesByPlayers", label: _modDef3317.DcxpNj };
items[2] = { list: "indieGamesByPlayers", label: _modDef3317.OAUTki };
const obj3 = { list: "indieGamesByPlayers", label: _modDef3317.OAUTki };
items[3] = { list: "gamesByStreamWatchMinutes", label: _modDef3317.M1L00s };
const obj5 = {};
obj5[fn(6378).CheckpointTraitRarity.DEFAULT] = _modDef3317.bP4GV1;
obj5[fn(6378).CheckpointTraitRarity.COMMON] = _modDef3317.QwkKWr;
obj5[fn(6378).CheckpointTraitRarity.RARE] = _modDef3317.KLmNgL;
obj5[fn(6378).CheckpointTraitRarity.EPIC] = _modDef3317.hAmdLZ;
obj5[fn(6378).CheckpointTraitRarity.ULTRA] = _modDef3317.Tv4xyf;
obj5[fn(6378).CheckpointTraitRarity.NITRO] = _modDef3317["0ModIv"];
const items1 = [
  fn(6378).CheckpointTraitRarity.ULTRA,
  fn(6378).CheckpointTraitRarity.EPIC,
  fn(6378).CheckpointTraitRarity.RARE,
  fn(6378).CheckpointTraitRarity.COMMON,
  fn(6378).CheckpointTraitRarity.DEFAULT,
  fn(6378).CheckpointTraitRarity.NITRO,
];
const items2 = [
  fn(6378).CheckpointTraitRarity.DEFAULT,
  fn(6378).CheckpointTraitRarity.COMMON,
  fn(6378).CheckpointTraitRarity.RARE,
  fn(6378).CheckpointTraitRarity.EPIC,
  fn(6378).CheckpointTraitRarity.ULTRA,
  fn(6378).CheckpointTraitRarity.NITRO,
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
export const CHECKPOINT_GRAY = "#ABACB2";
export const CHECKPOINT_DARK_CYAN = "#1482A7";
export const CHECKPOINT_BUTTON_SHADOW = "#3FC7D2";
export const CHECKPOINT_BUTTON_DISABLED_BORDER_MOBILE = "#1E1E20";
export const CHECKPOINT_GUILD_CARD_BACKGROUND = "#04363ABF";
export const CHECKPOINT_WEB_BACKGROUND_GRADIENT_START = "#3BD4F2";
export const CHECKPOINT_BACKGROUND_GRADIENT = ["#12606D", "#0B1624"];
export const CHECKPOINT_GLOBAL_GAME_CATEGORIES = items;
export const CHECKPOINT_NAV_HEIGHT = 64;
export const CHECKPOINT_CONTROL_SIZE = 40;
export const CHECKPOINT_CONTROL_ICON_SIZE = 20;
export const CHECKPOINT_CONTENT_MAX_WIDTH = 480;
export const CHECKPOINT_CONTENT_MAX_HEIGHT = 840;
export const CHECKPOINT_WIDE_HOME_START_GAP = 48;
export const CHECKPOINT_LOGO_SIZE = 40;
export const TRAIT_OPTION_WIDTH = 72;
export const TRAIT_OPTION_HEIGHT = 80;
export const NATIVE_CHARACTER_LAYER_SIZE = 224;
export const CHECKPOINT_INTRODUCTION_REVEAL_DURATION_MS = 1800;
export const CHECKPOINT_INTRODUCTION_FADE_IN_DURATION_MS = 1000;
export const CHECKPOINT_2026_POWER_BAR_UNITS = 6;
export const CHECKPOINT_2026_POWER_BAR_MIN_FILLED_UNITS = 1;
export const CHECKPOINT_2026_POWER_BAR_MAX_FILLED_UNITS = 5;
export const CHECKPOINT_RARITY_TO_COLOR = {
  [fn(6378).CheckpointTraitRarity.DEFAULT]: "#FFE047",
  [fn(6378).CheckpointTraitRarity.COMMON]: "#35ED7E",
  [fn(6378).CheckpointTraitRarity.RARE]: "#EF3054",
  [fn(6378).CheckpointTraitRarity.EPIC]: "#7D53DE",
  [fn(6378).CheckpointTraitRarity.ULTRA]: "#FC7A1E",
  [fn(6378).CheckpointTraitRarity.NITRO]: "#ABACB2",
};
export const CHECKPOINT_RARITY_TO_LABEL_MESSAGE = obj5;
export const CHECKPOINT_RARITY_ORDER_MOBILE = items1;
export const CHECKPOINT_RARITY_ORDER_WEB = items2;
