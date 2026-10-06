// discord_app/modules/checkpoint/CheckpointConstants.tsx
import _modDef3071 from "Checkpoint2026.messages.js";
import CheckpointTraitRarity from "../../../discord_common/js/shared/shared-constants/CheckpointTraitRarity.tsx";
import size from "../../../_runtime/metro/00002__.js";

const obj = {
  [CheckpointTraitRarity.CheckpointTraitRarity.DEFAULT]: "#FFE047",
  [CheckpointTraitRarity.CheckpointTraitRarity.COMMON]: "#35ED7E",
  [CheckpointTraitRarity.CheckpointTraitRarity.RARE]: "#EF3054",
  [CheckpointTraitRarity.CheckpointTraitRarity.EPIC]: "#7D53DE",
  [CheckpointTraitRarity.CheckpointTraitRarity.ULTRA]: "#FC7A1E",
};
obj[CheckpointTraitRarity.CheckpointTraitRarity.NITRO] = "url(#" + "checkpointRarityBadgeNitroGradient" + ")";
const obj2 = {};
obj2[CheckpointTraitRarity.CheckpointTraitRarity.DEFAULT] = _modDef3071.bP4GV1;
obj2[CheckpointTraitRarity.CheckpointTraitRarity.COMMON] = _modDef3071.QwkKWr;
obj2[CheckpointTraitRarity.CheckpointTraitRarity.RARE] = _modDef3071.KLmNgL;
obj2[CheckpointTraitRarity.CheckpointTraitRarity.EPIC] = _modDef3071.hAmdLZ;
obj2[CheckpointTraitRarity.CheckpointTraitRarity.ULTRA] = _modDef3071.Tv4xyf;
obj2[CheckpointTraitRarity.CheckpointTraitRarity.NITRO] = _modDef3071["0ModIv"];
const items = [
  CheckpointTraitRarity.CheckpointTraitRarity.ULTRA,
  CheckpointTraitRarity.CheckpointTraitRarity.EPIC,
  CheckpointTraitRarity.CheckpointTraitRarity.RARE,
  CheckpointTraitRarity.CheckpointTraitRarity.COMMON,
  CheckpointTraitRarity.CheckpointTraitRarity.DEFAULT,
  CheckpointTraitRarity.CheckpointTraitRarity.NITRO,
];
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
