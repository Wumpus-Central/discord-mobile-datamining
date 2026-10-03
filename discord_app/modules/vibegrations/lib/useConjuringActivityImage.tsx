// === Module 12821: useConjuringActivityImage ===

// Module 12821 (useConjuringActivityImage)
import shared from "shared" /* 4729 */;
import useThemeDefault from "useTheme" /* 4791 */;
import conjuringActivityImageDefault from "conjuringActivityImage" /* 12822 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/vibegrations/lib/useConjuringActivityImage.tsx");

export default () => {
  const tmp2 = conjuringActivityImageDefault;
  return shared.isThemeDark(useThemeDefault()) ? tmp2.dark : tmp2.light;
};