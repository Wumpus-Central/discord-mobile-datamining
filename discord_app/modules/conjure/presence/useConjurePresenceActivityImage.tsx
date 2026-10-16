// === Module 13981: useConjurePresenceActivityImage ===

// Module 13981 (useConjurePresenceActivityImage)
import shared from "shared" /* 5028 */;
import useThemeDefault from "useTheme" /* 5090 */;
import conjurePresenceActivityImageDefault from "conjurePresenceActivityImage" /* 13982 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/conjure/presence/useConjurePresenceActivityImage.tsx");

export default function useConjurePresenceActivityImage() {
  const tmp2 = conjurePresenceActivityImageDefault;
  return shared.isThemeDark(useThemeDefault()) ? tmp2.dark : tmp2.light;
};