// === Module 14166: CheckpointTransitionConstants ===

// Module 14166 (CheckpointTransitionConstants)
import size from "module_2" /* 2 */;

const obj = { delay: 0, duration: 350 };
const result = size.fileFinishedImporting("modules/checkpoint/CheckpointTransitionConstants.tsx");

export const CHECKPOINT_BACKGROUND_FADE = obj;
export const CHECKPOINT_STATS_FADE_OUT = { delay: 35, duration: 125 };
export const CHECKPOINT_STATS_FADE_IN = { delay: 200, duration: 125 };
export const CHECKPOINT_CHARACTER_PAGE_FADE_IN = { delay: 175, duration: 175 };
export const CHECKPOINT_CHARACTER_PAGE_FADE_OUT = { delay: 0, duration: 175 };
export const CHECKPOINT_INSTANT = { delay: 0, duration: 0 };
export const CHECKPOINT_CHARACTER_STAGE_HIDE = { delay: obj.delay + obj.duration, duration: 0 };
export const CHECKPOINT_STATS_HIDDEN_SCALE = 1.02;