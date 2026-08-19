// discord_common/js/packages/design/components/Text/useTypographyVariantRemap.native.tsx
import obj132 from "../../../../../../_runtime/00002_obj132.js";
import json from "../ThemeContextProvider/ThemeContext.tsx";
import remapTypographyVariant from "typographyVariantRemap.tsx";

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