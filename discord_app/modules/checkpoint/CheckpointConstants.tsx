// === Module 5121: CheckpointConstants ===

// Module 5121 (CheckpointConstants)
import _modDef3071 from "module_3071" /* 3071 */;

const obj = { [fn(5122).CheckpointTraitRarity.DEFAULT]: "#FFE047", [fn(5122).CheckpointTraitRarity.COMMON]: "#35ED7E", [fn(5122).CheckpointTraitRarity.RARE]: "#EF3054", [fn(5122).CheckpointTraitRarity.EPIC]: "#7D53DE", [fn(5122).CheckpointTraitRarity.ULTRA]: "#FC7A1E" };
obj[fn(5122).CheckpointTraitRarity.NITRO] = "url(#" + "checkpointRarityBadgeNitroGradient" + ")";
const obj2 = {};
obj2[fn(5122).CheckpointTraitRarity.DEFAULT] = _modDef3071.bP4GV1;
obj2[fn(5122).CheckpointTraitRarity.COMMON] = _modDef3071.QwkKWr;
obj2[fn(5122).CheckpointTraitRarity.RARE] = _modDef3071.KLmNgL;
obj2[fn(5122).CheckpointTraitRarity.EPIC] = _modDef3071.hAmdLZ;
obj2[fn(5122).CheckpointTraitRarity.ULTRA] = _modDef3071.Tv4xyf;
obj2[fn(5122).CheckpointTraitRarity.NITRO] = _modDef3071["0ModIv"];
const items = [fn(5122).CheckpointTraitRarity.ULTRA, fn(5122).CheckpointTraitRarity.EPIC, fn(5122).CheckpointTraitRarity.RARE, fn(5122).CheckpointTraitRarity.COMMON, fn(5122).CheckpointTraitRarity.DEFAULT, fn(5122).CheckpointTraitRarity.NITRO];
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/CheckpointConstants.tsx");

export const CheckpointVersions = { V2025: 0, [0]: "V2025", V2026: 1, [1]: "V2026" };
export const CHECKPOINT_PRIMARY = "#34E2F1";
export const CHECKPOINT_YELLOW = "#FFE047";
export const CHECKPOINT_GREEN = "#35ED7E";
export const CHECKPOINT_PINK = "#EF3054";
export const CHECKPOINT_PURPLE = "#7D53DE";
export const CHECKPOINT_ORANGE = "#FC7A1E";
export const CHECKPOINT_DARK_CYAN = "#1482A7";
export const CHECKPOINT_BUTTON_SHADOW = "#3FC7D2";
export const CHECKPOINT_NITRO_GRADIENT_COLORS = ["#DFDFDF", "#5E5E5E"];
export const CHECKPOINT_NITRO_BADGE_GRADIENT_ID = "checkpointRarityBadgeNitroGradient";
export const CHECKPOINT_BACKGROUND_GRADIENT = ["#12606D", "#0B1624"];
export const CHECKPOINT_NAV_HEIGHT = 64;
export const CHECKPOINT_CONTROL_SIZE = 48;
export const CHECKPOINT_LOGO_SIZE = 40;
export const TRAIT_OPTION_WIDTH = 72;
export const TRAIT_OPTION_HEIGHT = 80;
export const NATIVE_CHARACTER_LAYER_SIZE = 252;
export const CHECKPOINT_RARITY_COLORS = obj;
export const CHECKPOINT_RARITY_LABEL_MESSAGES = obj2;
export const CHECKPOINT_RARITY_ORDER = items;