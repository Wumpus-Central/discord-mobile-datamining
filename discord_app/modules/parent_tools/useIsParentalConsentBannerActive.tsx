// === Module 14694: useIsParentalConsentBannerActive ===

// Module 14694 (useIsParentalConsentBannerActive)
import set from "set" /* 2 */;
import useParentalConsentWarning from "useParentalConsentWarning" /* 14695 */;
import frozen from "frozen" /* 14697 */;

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