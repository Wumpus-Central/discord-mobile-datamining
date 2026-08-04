const result = require("set").fileFinishedImporting("modules/parent_tools/useIsParentalConsentBannerActive.tsx");

export const useIsParentalConsentBannerActive = function useIsParentalConsentBannerActive() {
  const parentalConsentWarning = require(14016) /* useParentalConsentWarning */.useParentalConsentWarning();
  let hasItem;
  if (parentalConsentWarning != null) {
    const surfaces = parentalConsentWarning.surfaces;
    if (surfaces != null) {
      hasItem = surfaces.includes(require(14018) /* frozen */.ParentalConsentWarningSurface.BANNER);
    }
  }
  return true === hasItem;
};