// === Module 15202: BountiesModalConstants ===

// Module 15202 (BountiesModalConstants)
import size from "module_2" /* 2 */;

function getBountyVideoEndPeekScale(value, c14) {
  return 1 + (c14 - 1) * value;
}
getBountyVideoEndPeekScale.__closure = {};
getBountyVideoEndPeekScale.__workletHash = 16304629459688;
getBountyVideoEndPeekScale.__initData = { code: "function getBountyVideoEndPeekScale_BountiesModalConstantsTsx1(progress,targetScale){return 1+(targetScale-1)*progress;}" };
function getBountyVideoEndPeekClipHeight(value, width, height) {
  return height + (Math.min(width, height) - height) * value;
}
getBountyVideoEndPeekClipHeight.__closure = {};
getBountyVideoEndPeekClipHeight.__workletHash = 16660906575916;
getBountyVideoEndPeekClipHeight.__initData = { code: "function getBountyVideoEndPeekClipHeight_BountiesModalConstantsTsx2(progress,videoWidth,videoHeight){const squareSide=Math.min(videoWidth,videoHeight);return videoHeight+(squareSide-videoHeight)*progress;}" };
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalConstants.tsx");

export const BOUNTY_REWARD_CLAIM_FAILED_TOAST_DURATION_MS = 10000;
export const getBountyVideoEndAppStoreSheetHeight = function getBountyVideoEndAppStoreSheetHeight(arg0) {
  return 0.6 * arg0;
};
export const getBountyVideoEndPeekTargetScale = function getBountyVideoEndPeekTargetScale(windowHeight) {
  windowHeight = windowHeight.windowHeight;
  const bound = Math.min(windowHeight.videoWidth, windowHeight.videoHeight);
  if (bound <= 0) {
    return 1;
  } else {
    const _Math = Math;
    const _Math2 = Math;
    return Math.min(1, Math.max(0.1, (windowHeight - 0.6 * windowHeight - windowHeight.videoTop - 8) / bound));
  }
};
export { getBountyVideoEndPeekScale };
export { getBountyVideoEndPeekClipHeight };