// discord_common/js/packages/design/components/Text/useTypographyVariantRemap.native.tsx
import { json } from "../ThemeContextProvider/ThemeContext.tsx";
import { remapTypographyVariant } from "typographyVariantRemap.tsx";
const result = require("set").fileFinishedImporting("../discord_common/js/packages/design/components/Text/useTypographyVariantRemap.native.tsx");

export const useTypographyVariantRemap = function useTypographyVariantRemap(variant, arg1) {
  let themeContext = json.useThemeContext();
  if (themeContext == null) {
    themeContext = [];
  }
  let enabledExperiments = themeContext.enabledExperiments;
  const obj = json;
  const tmp = require;
  if (enabledExperiments == null) {
    enabledExperiments = [];
  }
  return remapTypographyVariant.remapTypographyVariant(enabledExperiments, variant, arg1);
};