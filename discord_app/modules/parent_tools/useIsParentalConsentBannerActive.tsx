// discord_app/modules/parent_tools/useIsParentalConsentBannerActive.tsx
const result = require("set").fileFinishedImporting("modules/parent_tools/useIsParentalConsentBannerActive.tsx");

export const useIsParentalConsentBannerActive = function useIsParentalConsentBannerActive() {
  const parentalConsentWarning = require("useParentalConsentWarning.tsx") /* useParentalConsentWarning */.useParentalConsentWarning();
  let hasItem;
  if (parentalConsentWarning != null) {
    const surfaces = parentalConsentWarning.surfaces;
    if (surfaces != null) {
      hasItem = surfaces.includes(require("ParentalConsentWarningTypes.tsx") /* frozen */.ParentalConsentWarningSurface.BANNER);
    }
  }
  return true === hasItem;
};