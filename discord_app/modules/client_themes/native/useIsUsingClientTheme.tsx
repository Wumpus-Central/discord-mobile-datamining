// === Module 7519: useIsUsingClientTheme ===

// Module 7519 (useIsUsingClientTheme)
import useActiveTheme from "useActiveTheme" /* 7520 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default () => {
  const obj = useActiveTheme;
  return obj.useIsClientThemeOrCustomThemeActive();
};