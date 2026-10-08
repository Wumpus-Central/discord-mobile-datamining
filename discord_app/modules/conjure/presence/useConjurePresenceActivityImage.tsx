// === Module 12987: useConjurePresenceActivityImage ===

// Module 12987 (useConjurePresenceActivityImage)
import shared from "shared" /* 4929 */;
import useThemeDefault from "useTheme" /* 4991 */;
import conjurePresenceActivityImageDefault from "conjurePresenceActivityImage" /* 12988 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/conjure/presence/useConjurePresenceActivityImage.tsx");

export default function useConjurePresenceActivityImage() {
  const tmp2 = conjurePresenceActivityImageDefault;
  return shared.isThemeDark(useThemeDefault()) ? tmp2.dark : tmp2.light;
};