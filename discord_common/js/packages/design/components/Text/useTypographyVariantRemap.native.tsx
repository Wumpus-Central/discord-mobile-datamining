// discord_common/js/packages/design/components/Text/useTypographyVariantRemap.native.tsx
import ThemeContext from "../ThemeContextProvider/ThemeContext.tsx";
import typographyVariantRemap from "typographyVariantRemap.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting(
  "../discord_common/js/packages/design/components/Text/useTypographyVariantRemap.native.tsx",
);

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
