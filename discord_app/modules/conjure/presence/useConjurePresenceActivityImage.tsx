// === Module 12821: useConjurePresenceActivityImage ===

// Module 12821 (useConjurePresenceActivityImage)
import shared from "shared" /* 4729 */;
import useThemeDefault from "useTheme" /* 4791 */;
import conjurePresenceActivityImageDefault from "conjurePresenceActivityImage" /* 12822 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/conjure/presence/useConjurePresenceActivityImage.tsx");

export default () => {
  const tmp2 = conjurePresenceActivityImageDefault;
  return shared.isThemeDark(useThemeDefault()) ? tmp2.dark : tmp2.light;
};