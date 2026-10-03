// === Module 5964: MemberVerificationFormConstants ===

// Module 5964 (MemberVerificationFormConstants)
import c from "c" /* 576 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1484 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3 = 0.5625;
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/MemberVerificationFormConstants.tsx");

export const BANNER_RATIO_HEIGHT_16_9 = 0.5625;
export const AVATAR_SIZE = 76;
export const AVATAR_BORDER_WIDTH = 6;
export const SCROLL_EVENT_TIMER_MS = 16;
export const useBannerHeight = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { ignoreKeyboard: true };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  const size = useWindowDimensionsDefault(first);
  return Math.min(size.width, size.height) * c3;
}) : (() => {
  const size = useWindowDimensionsDefault({ ignoreKeyboard: true });
  return Math.min(size.width, size.height) * c3;
});