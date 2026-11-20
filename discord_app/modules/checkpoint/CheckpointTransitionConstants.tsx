// discord_app/modules/checkpoint/CheckpointTransitionConstants.tsx
import size from "../../../_runtime/metro/00002__.js";

const obj = { delay: 0, duration: 350 };
const obj2 = { delay: 200, duration: 125 };
const sum = obj2.delay + 500;
const result = size.fileFinishedImporting("modules/checkpoint/CheckpointTransitionConstants.tsx");

export const CheckpointCharacterStageHiddenBy = {
  STATS: "stats",
  CUSTOMIZATION_ROUTE_CHANGE: "customization_route_change",
};
export const CHECKPOINT_BACKGROUND_FADE = obj;
export const CHECKPOINT_STATS_FADE_OUT = { delay: 35, duration: 125 };
export const CHECKPOINT_STATS_FADE_IN = obj2;
export const CHECKPOINT_SIDEKICK_CONTENT_FADE_IN = { delay: 700, duration: 175 };
export const CHECKPOINT_FRIENDS_CONTENT_FADE_IN = { delay: 175, duration: 175 };
export const CHECKPOINT_FRIENDS_CONTENT_FADE_OUT = { delay: 0, duration: 125 };
export const CHECKPOINT_CHARACTER_PAGE_FADE_IN = { delay: 175, duration: 175 };
export const CHECKPOINT_CHARACTER_PAGE_FADE_OUT = { delay: 0, duration: 175 };
export const CHECKPOINT_INSTANT = { delay: 0, duration: 0 };
export const CHECKPOINT_CHARACTER_STAGE_FADE = { delay: 0, duration: 175 };
export const CHECKPOINT_CHARACTER_STAGE_HIDE = { delay: obj.delay + obj.duration, duration: 0 };
export const CHECKPOINT_STATS_HIDDEN_SCALE = 1.02;
export const CHECKPOINT_CHARACTER_EXIT_ZOOM_DURATION_MS = 750;
export const CHECKPOINT_CHARACTER_EXIT_TEXTURE_TIMEOUT_MS = 2000;
export const CHECKPOINT_STAT_COUNT_UP_DURATION = 500;
export const CHECKPOINT_CHARACTER_MOUNT_DELAY = sum;
export const CHECKPOINT_COMPOSITE_REVEAL_DURATION_MS = 150;
export const CHECKPOINT_COMPOSITE_REVEAL_EASING = [0, 0, 0.58, 1];
export const CHECKPOINT_COMPOSITE_LOAD_DEADLINE_MS = 5000;
