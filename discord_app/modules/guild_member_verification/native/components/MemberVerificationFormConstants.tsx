// === Module 5573: MemberVerificationFormConstants ===

// Module 5573 (MemberVerificationFormConstants)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1477 */;
import size from "module_2" /* 2 */;

let c2 = 0.5625;
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/MemberVerificationFormConstants.tsx");

export const BANNER_RATIO_HEIGHT_16_9 = 0.5625;
export const AVATAR_SIZE = 76;
export const AVATAR_BORDER_WIDTH = 6;
export const SCROLL_EVENT_TIMER_MS = 16;
export const useBannerHeight = function useBannerHeight() {
  const size = useWindowDimensionsDefault({ ignoreKeyboard: true });
  return Math.min(size.width, size.height) * c2;
};