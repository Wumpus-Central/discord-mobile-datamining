// === Module 14920: useIsParentalConsentBannerActive ===

// Module 14920 (useIsParentalConsentBannerActive)
import useParentalConsentWarning from "useParentalConsentWarning" /* 14921 */;
import ParentalConsentWarningTypes from "ParentalConsentWarningTypes" /* 14923 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/parent_tools/useIsParentalConsentBannerActive.tsx");

export const useIsParentalConsentBannerActive = function useIsParentalConsentBannerActive() {
  const parentalConsentWarning = useParentalConsentWarning.useParentalConsentWarning();
  let hasItem;
  if (parentalConsentWarning != null) {
    const surfaces = parentalConsentWarning.surfaces;
    if (surfaces != null) {
      hasItem = surfaces.includes(ParentalConsentWarningTypes.ParentalConsentWarningSurface.BANNER);
    }
  }
  return true === hasItem;
};