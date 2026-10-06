// === Module 4902: useTypographyVariantRemap ===

// Module 4902 (useTypographyVariantRemap)
import react from "react" /* 576 */;
import ThemeContext from "ThemeContext" /* 4599 */;
import typographyVariantRemap from "typographyVariantRemap" /* 4903 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let tmp4;
  const obj = react;
  const cResult = obj.c(6);
  const obj2 = ThemeContext;
  let themeContext = obj2.useThemeContext();
  if (themeContext == null) {
    themeContext = [];
  }
  const enabledExperiments = themeContext.enabledExperiments;
  if (cResult[0] !== enabledExperiments) {
    let items = enabledExperiments;
    if (enabledExperiments == null) {
      items = [];
    }
    cResult[0] = enabledExperiments;
    cResult[1] = items;
    tmp4 = items;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === arg1) {
    if (cResult[3] === tmp4) {
      let tmp5;
      if (cResult[4] === arg0) {
        tmp5 = cResult[5];
      }
      return tmp5;
    }
  }
  const tmpResult = typographyVariantRemap;
  const result = tmpResult.remapTypographyVariant(tmp4, arg0, arg1);
  cResult[2] = arg1;
  cResult[3] = tmp4;
  cResult[4] = arg0;
  cResult[5] = result;
  tmp5 = result;
}) : ((arg0, arg1) => {
  const obj = ThemeContext;
  let themeContext = obj.useThemeContext();
  if (themeContext == null) {
    themeContext = [];
  }
  let enabledExperiments = themeContext.enabledExperiments;
  const remapTypographyVariant = typographyVariantRemap.remapTypographyVariant;
  typographyVariantRemap;
  if (enabledExperiments == null) {
    enabledExperiments = [];
  }
  return remapTypographyVariant(enabledExperiments, arg0, arg1);
});
let result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Text/useTypographyVariantRemap.native.tsx");

export const useTypographyVariantRemap = tmp2;