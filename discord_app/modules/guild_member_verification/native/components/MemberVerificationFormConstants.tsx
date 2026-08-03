// === Module 9326: BANNER_RATIO_HEIGHT_16_9 ===

// Module 9326 (BANNER_RATIO_HEIGHT_16_9)
let c2 = 0.5625;
const result = require("set").fileFinishedImporting("modules/guild_member_verification/native/components/MemberVerificationFormConstants.tsx");

export const BANNER_RATIO_HEIGHT_16_9 = 0.5625;
export const AVATAR_SIZE = 76;
export const AVATAR_BORDER_WIDTH = 6;
export const SCROLL_EVENT_TIMER_MS = 16;
export const useBannerHeight = function useBannerHeight() {
  return importDefault(1474)().width * c2;
};