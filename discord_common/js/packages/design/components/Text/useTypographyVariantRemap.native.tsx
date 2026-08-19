// === Module 4739: useTypographyVariantRemap ===

// Module 4739 (useTypographyVariantRemap)
import obj132 from "obj132" /* 2 */;
import json from "json" /* 1359 */;
import remapTypographyVariant from "remapTypographyVariant" /* 4740 */;

const result = obj132.fileFinishedImporting("../discord_common/js/packages/design/components/Text/useTypographyVariantRemap.native.tsx");

export const useTypographyVariantRemap = function useTypographyVariantRemap(variant, arg1) {
  let themeContext = json.useThemeContext();
  if (themeContext == null) {
    themeContext = [];
  }
  let enabledExperiments = themeContext.enabledExperiments;
  if (enabledExperiments == null) {
    enabledExperiments = [];
  }
  return remapTypographyVariant.remapTypographyVariant(enabledExperiments, variant, arg1);
};