// discord_app/modules/dice_roll/DiceRollConstants.tsx
import size from "../../../_runtime/metro/00002__.js";

const items = [4, 6, 8, 10, 12, 20];
const result = size.fileFinishedImporting("modules/dice_roll/DiceRollConstants.tsx");

export const ROLL_DURATION_MS = 1500;
export const AFTER_ROLL_DELAY_MS = 2000;
export const DISMISS_DELAY_MS = 300;
export const MAX_DICE_COUNT = 10;
export const ALLOWED_DICE_SIDES = items;
export const ALLOWED_DICE_SIDES_SET = new Set(items);
export const DEFAULT_DICE_SIDES = 6;
