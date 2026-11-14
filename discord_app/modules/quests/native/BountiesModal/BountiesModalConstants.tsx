// === Module 17546: BountiesModalConstants ===

// Module 17546 (BountiesModalConstants)
import size from "module_2" /* 2 */;

const items = [{ code: "(function getBountyVideoEndPeekScale_BountiesModalConstantsTsx1(progress,targetScale){return 1+(targetScale-1)*progress;})" }];
[tmp2] = items;
function getBountyVideoEndPeekScale(arg0, arg1) {
  return 1 + (arg1 - 1) * arg0;
}
getBountyVideoEndPeekScale.__workletHash = 14941163546409;
getBountyVideoEndPeekScale.__initData = tmp2;
const items1 = [{ code: "(function getBountyVideoEndPeekClipHeight_BountiesModalConstantsTsx2(progress,videoWidth,videoHeight){const squareSide=Math.min(videoWidth,videoHeight);return videoHeight+(squareSide-videoHeight)*progress;})" }];
[tmp3] = items1;
function getBountyVideoEndPeekClipHeight(arg0, arg1, arg2) {
  return arg2 + (Math.min(arg1, arg2) - arg2) * arg0;
}
getBountyVideoEndPeekClipHeight.__workletHash = 6690604223821;
getBountyVideoEndPeekClipHeight.__initData = tmp3;
function getBountyVideoEndAppStoreSheetHeight(arg0) {
  return 0.6 * arg0;
}
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalConstants.tsx");

export const BOUNTY_REWARD_CLAIM_FAILED_TOAST_DURATION_MS = 10000;
export { getBountyVideoEndAppStoreSheetHeight };
export function getBountyVideoEndPeekTargetScale(windowHeight) {
  windowHeight = windowHeight.windowHeight;
  const bound = Math.min(windowHeight.videoWidth, windowHeight.videoHeight);
  if (bound <= 0) {
    return 1;
  } else {
    const _Math = Math;
    const _Math2 = Math;
    return Math.min(1, Math.max(0.1, (windowHeight - 0.6 * windowHeight - windowHeight.videoTop - 8) / bound));
  }
}
export { getBountyVideoEndPeekScale };
export { getBountyVideoEndPeekClipHeight };