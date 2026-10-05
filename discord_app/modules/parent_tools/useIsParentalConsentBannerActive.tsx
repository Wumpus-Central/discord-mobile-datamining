// discord_app/modules/parent_tools/useIsParentalConsentBannerActive.tsx
import react from "../../../_runtime/00576_react.js";
import useParentalConsentWarning from "useParentalConsentWarning.tsx";
import ParentalConsentWarningTypes from "ParentalConsentWarningTypes.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp7;
      const obj = react;
      const cResult = obj.c(2);
      const obj2 = useParentalConsentWarning;
      const parentalConsentWarning = obj2.useParentalConsentWarning();
      let surfaces1;
      const first = cResult[0];
      if (parentalConsentWarning != null) {
        surfaces1 = parentalConsentWarning.surfaces;
      }
      if (first !== surfaces1) {
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
        tmp7 = hasItem;
      } else {
        tmp7 = cResult[1];
      }
      return true === tmp7;
    }
  : () => {
      const obj = useParentalConsentWarning;
      const parentalConsentWarning = obj.useParentalConsentWarning();
      let hasItem;
      if (parentalConsentWarning != null) {
        const surfaces = parentalConsentWarning.surfaces;
        if (surfaces != null) {
          hasItem = surfaces.includes(ParentalConsentWarningTypes.ParentalConsentWarningSurface.BANNER);
        }
      }
      return true === hasItem;
    };
const result = size.fileFinishedImporting("modules/parent_tools/useIsParentalConsentBannerActive.tsx");

export const useIsParentalConsentBannerActive = tmp2;
