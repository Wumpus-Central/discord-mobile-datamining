// === Module 15005: BountiesModalConstants ===

// Module 15005 (BountiesModalConstants)
import AppStoreOverlayBody from "AppStoreOverlayBody" /* 11502 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalConstants.tsx");

export const BOUNTY_REWARD_CLAIM_FAILED_TOAST_DURATION_MS = 10000;
export const getBountyVideoEndAppStoreSheetHeight = function getBountyVideoEndAppStoreSheetHeight(arg0) {
  return arg0 * AppStoreOverlayBody.APP_STORE_OVERLAY_HEIGHT_RATIO;
};
export const getBountyVideoEndPeekTargetScale = function getBountyVideoEndPeekTargetScale(arg0) {
  ({ windowHeight, videoHeight } = arg0);
  if (videoHeight <= 0) {
    return 1;
  } else {
    const _Math = Math;
    const _Math2 = Math;
    return Math.min(1, Math.max(0.1, (windowHeight - windowHeight * AppStoreOverlayBody.APP_STORE_OVERLAY_HEIGHT_RATIO - tmp - 8) / videoHeight));
  }
};