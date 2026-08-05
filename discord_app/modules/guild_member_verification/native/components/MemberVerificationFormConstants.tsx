// discord_app/modules/guild_member_verification/native/components/MemberVerificationFormConstants.tsx
import { useWindowDimensions } from "../../../screen/useWindowDimensions.native.tsx";
let c2 = 0.5625;
const result = require("set").fileFinishedImporting("modules/guild_member_verification/native/components/MemberVerificationFormConstants.tsx");

export const BANNER_RATIO_HEIGHT_16_9 = 0.5625;
export const AVATAR_SIZE = 76;
export const AVATAR_BORDER_WIDTH = 6;
export const SCROLL_EVENT_TIMER_MS = 16;
export const useBannerHeight = function useBannerHeight() {
  const size = useWindowDimensions({ ignoreKeyboard: true });
  return Math.min(size.width, size.height) * c2;
};