// _runtime/01774_VALID_ANIMATION_DIRECTIONS.js
const set = new Set(["normal", "reverse", "alternate", "alternate-reverse"]);
const set1 = new Set(["none", "forwards", "backwards", "both"]);

export const VALID_ANIMATION_DIRECTIONS = set;
export const VALID_FILL_MODES = set1;
export const VALID_PLAY_STATES = new Set(["running", "paused"]);
