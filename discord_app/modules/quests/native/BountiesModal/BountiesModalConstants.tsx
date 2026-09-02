// discord_app/modules/quests/native/BountiesModal/BountiesModalConstants.tsx
import set from "../../../../../_runtime/00002_set.js";
import APP_STORE_OVERLAY_HEIGHT_RATIO from "../AppStoreOverlay/AppStoreOverlayBody.tsx";

const result = set.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalConstants.tsx");

export const BOUNTY_REWARD_CLAIM_FAILED_TOAST_DURATION_MS = 10000;
export const getBountyVideoEndAppStoreSheetHeight = function getBountyVideoEndAppStoreSheetHeight(arg0) {
  return arg0 * APP_STORE_OVERLAY_HEIGHT_RATIO.APP_STORE_OVERLAY_HEIGHT_RATIO;
};
export const getBountyVideoEndPeekTargetScale = function getBountyVideoEndPeekTargetScale(arg0) {
  ({ windowHeight, videoHeight } = arg0);
  if (videoHeight <= 0) {
    return 1;
  } else {
    const _Math = Math;
    const _Math2 = Math;
    return Math.min(
      1,
      Math.max(
        0.1,
        (windowHeight - windowHeight * APP_STORE_OVERLAY_HEIGHT_RATIO.APP_STORE_OVERLAY_HEIGHT_RATIO - tmp - 8) /
          videoHeight,
      ),
    );
  }
};
