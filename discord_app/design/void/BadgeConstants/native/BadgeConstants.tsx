// === Module 1299: PX_16 ===

// Module 1299 (PX_16)
const PX_16 = require("Themes").space.PX_16;
const PX_12 = require("Themes").space.PX_12;
const sum = PX_16 + 6;
const sum1 = PX_12 + 6;
const result = require("set").fileFinishedImporting("design/void/BadgeConstants/native/BadgeConstants.tsx");

export const BADGE_SIZE = PX_16;
export const BADGE_SIZE_UNREAD = PX_12;
export const BADGE_PADDING = 3;
export const BADGE_MASK_SIZE = sum;
export const BADGE_MASK_UNREAD_SIZE = sum1;