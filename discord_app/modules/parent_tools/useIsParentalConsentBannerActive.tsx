// === Module 14673: useIsParentalConsentBannerActive ===

// Module 14673 (useIsParentalConsentBannerActive)
import c from "c" /* 576 */;
import useParentalConsentWarning from "useParentalConsentWarning" /* 14674 */;
import ParentalConsentWarningTypes from "ParentalConsentWarningTypes" /* 14676 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/parent_tools/useIsParentalConsentBannerActive.tsx");

export const useIsParentalConsentBannerActive = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  const parentalConsentWarning = useParentalConsentWarning.useParentalConsentWarning();
  let surfaces1;
  if (parentalConsentWarning != null) {
    surfaces1 = parentalConsentWarning.surfaces;
  }
  if (cResult[0] !== surfaces1) {
    let hasItem;
    if (parentalConsentWarning != null) {
      const surfaces = parentalConsentWarning.surfaces;
      if (surfaces != null) {
        hasItem = surfaces.includes(ParentalConsentWarningTypes.ParentalConsentWarningSurface.BANNER);
      }
    }
    let surfaces2;
    if (parentalConsentWarning != null) {
      surfaces2 = parentalConsentWarning.surfaces;
    }
    cResult[0] = surfaces2;
    cResult[1] = hasItem;
    let tmp6 = hasItem;
  } else {
    tmp6 = cResult[1];
  }
  return true === tmp6;
}) : (() => {
  const parentalConsentWarning = useParentalConsentWarning.useParentalConsentWarning();
  let hasItem;
  if (parentalConsentWarning != null) {
    const surfaces = parentalConsentWarning.surfaces;
    if (surfaces != null) {
      hasItem = surfaces.includes(ParentalConsentWarningTypes.ParentalConsentWarningSurface.BANNER);
    }
  }
  return true === hasItem;
});