// === Module 4566: useTypographyVariantRemap ===

// Module 4566 (useTypographyVariantRemap)
import ThemeContext from "ThemeContext" /* 4284 */;
import typographyVariantRemap from "typographyVariantRemap" /* 4567 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Text/useTypographyVariantRemap.native.tsx");

export const useTypographyVariantRemap = function useTypographyVariantRemap(variant, arg1) {
  let themeContext = ThemeContext.useThemeContext();
  if (themeContext == null) {
    themeContext = [];
  }
  let enabledExperiments = themeContext.enabledExperiments;
  if (enabledExperiments == null) {
    enabledExperiments = [];
  }
  return typographyVariantRemap.remapTypographyVariant(enabledExperiments, variant, arg1);
};