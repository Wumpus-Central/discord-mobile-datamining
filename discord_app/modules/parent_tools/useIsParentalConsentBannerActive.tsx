// discord_app/modules/parent_tools/useIsParentalConsentBannerActive.tsx
import { frozen } from "ParentalConsentWarningTypes.tsx";
import { useParentalConsentWarning } from "useParentalConsentWarning.tsx";
const result = require("set").fileFinishedImporting("modules/parent_tools/useIsParentalConsentBannerActive.tsx");

export const useIsParentalConsentBannerActive = function useIsParentalConsentBannerActive() {
  const parentalConsentWarning = useParentalConsentWarning /* useParentalConsentWarning */.useParentalConsentWarning();
  let hasItem;
  if (parentalConsentWarning != null) {
    const surfaces = parentalConsentWarning.surfaces;
    if (surfaces != null) {
      hasItem = surfaces.includes(frozen /* frozen */.ParentalConsentWarningSurface.BANNER);
    }
  }
  return true === hasItem;
};