// === Module 5115: CheckpointConstants ===

// Module 5115 (CheckpointConstants)
import CheckpointTraitRarity from "CheckpointTraitRarity" /* 5116 */;
import size from "module_2" /* 2 */;

const obj = { [CheckpointTraitRarity.CheckpointTraitRarity.DEFAULT]: "#FFE047", [CheckpointTraitRarity.CheckpointTraitRarity.COMMON]: "#35ED7E", [CheckpointTraitRarity.CheckpointTraitRarity.RARE]: "#EF3054", [CheckpointTraitRarity.CheckpointTraitRarity.EPIC]: "#7D53DE", [CheckpointTraitRarity.CheckpointTraitRarity.ULTRA]: "#FC7A1E" };
obj[CheckpointTraitRarity.CheckpointTraitRarity.NITRO] = "url(#" + "checkpointRarityBadgeNitroGradient" + ")";
const items = [CheckpointTraitRarity.CheckpointTraitRarity.ULTRA, CheckpointTraitRarity.CheckpointTraitRarity.EPIC, CheckpointTraitRarity.CheckpointTraitRarity.RARE, CheckpointTraitRarity.CheckpointTraitRarity.COMMON, CheckpointTraitRarity.CheckpointTraitRarity.DEFAULT, CheckpointTraitRarity.CheckpointTraitRarity.NITRO];
const result = size.fileFinishedImporting("modules/checkpoint/CheckpointConstants.tsx");

export const CheckpointVersions = { V2025: 0, [0]: "V2025", V2026: 1, [1]: "V2026" };
export const CHECKPOINT_PRIMARY = "#34E2F1";
export const CHECKPOINT_YELLOW = "#FFE047";
export const CHECKPOINT_GREEN = "#35ED7E";
export const CHECKPOINT_PINK = "#EF3054";
export const CHECKPOINT_PURPLE = "#7D53DE";
export const CHECKPOINT_ORANGE = "#FC7A1E";
export const CHECKPOINT_DARK_CYAN = "#1482A7";
export const CHECKPOINT_BUTTON_BORDER = "#1482A7";
export const CHECKPOINT_BUTTON_SHADOW = "#3FC7D2";
export const CHECKPOINT_NITRO_GRADIENT_COLORS = ["#DFDFDF", "#5E5E5E"];
export const CHECKPOINT_NITRO_BADGE_GRADIENT_ID = "checkpointRarityBadgeNitroGradient";
export const CHECKPOINT_BACKGROUND_GRADIENT = ["#12606D", "#0B1624"];
export const CHECKPOINT_NAV_HEIGHT = 64;
export const CHECKPOINT_LOGO_SIZE = 40;
export const TRAIT_OPTION_WIDTH = 72;
export const TRAIT_OPTION_HEIGHT = 80;
export const NATIVE_CHARACTER_LAYER_SIZE = 252;
export const CHECKPOINT_RARITY_COLORS = obj;
export const CHECKPOINT_RARITY_ORDER = items;