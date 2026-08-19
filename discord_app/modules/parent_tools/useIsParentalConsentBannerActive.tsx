// discord_app/modules/parent_tools/useIsParentalConsentBannerActive.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import useParentalConsentWarning from "useParentalConsentWarning.tsx";
import frozen from "ParentalConsentWarningTypes.tsx";

const result = obj132.fileFinishedImporting("modules/parent_tools/useIsParentalConsentBannerActive.tsx");

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