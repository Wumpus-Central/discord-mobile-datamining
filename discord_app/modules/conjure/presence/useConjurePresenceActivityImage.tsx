// === Module 14179: useConjurePresenceActivityImage ===

// Module 14179 (useConjurePresenceActivityImage)
import shared from "shared" /* 4973 */;
import useThemeDefault from "useTheme" /* 5187 */;
import conjurePresenceActivityImageDefault from "conjurePresenceActivityImage" /* 14180 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/conjure/presence/useConjurePresenceActivityImage.tsx");

export default function useConjurePresenceActivityImage() {
  const tmp2 = conjurePresenceActivityImageDefault;
  return shared.isThemeDark(useThemeDefault()) ? tmp2.dark : tmp2.light;
};