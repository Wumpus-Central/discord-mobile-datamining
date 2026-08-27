// === Module 14420: useIsParentalConsentBannerActive ===

// Module 14420 (useIsParentalConsentBannerActive)
import set from "set" /* 2 */;
import useParentalConsentWarning from "useParentalConsentWarning" /* 14421 */;
import frozen from "frozen" /* 14423 */;

const result = set.fileFinishedImporting("modules/parent_tools/useIsParentalConsentBannerActive.tsx");

export const useIsParentalConsentBannerActive = function useIsParentalConsentBannerActive() {
  const parentalConsentWarning = useParentalConsentWarning.useParentalConsentWarning();
  let hasItem;
  if (parentalConsentWarning != null) {
    const surfaces = parentalConsentWarning.surfaces;
    if (surfaces != null) {
      hasItem = surfaces.includes(frozen.ParentalConsentWarningSurface.BANNER);
    }
  }
  return true === hasItem;
};