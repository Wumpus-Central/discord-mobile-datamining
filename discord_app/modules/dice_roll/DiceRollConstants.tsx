// === Module 9301: ROLL_DURATION_MS ===

// Module 9301 (ROLL_DURATION_MS)
import set from "set" /* 2 */;

const items = [4, 6, 8, 10, 12, 20];
let set = new Set(items);
const result = set.fileFinishedImporting("modules/dice_roll/DiceRollConstants.tsx");

export const ROLL_DURATION_MS = 1500;
export const AFTER_ROLL_DELAY_MS = 2000;
export const DISMISS_DELAY_MS = 300;
export const MAX_DICE_COUNT = 10;
export const ALLOWED_DICE_SIDES = items;
export const ALLOWED_DICE_SIDES_SET = set;
export const DEFAULT_DICE_SIDES = 6;