// === Module 14283: useConjurePresenceActivityImage ===

// Module 14283 (useConjurePresenceActivityImage)
import shared from "shared" /* 4978 */;
import useThemeDefault from "useTheme" /* 5205 */;
import conjurePresenceActivityImageDefault from "conjurePresenceActivityImage" /* 14284 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/conjure/presence/useConjurePresenceActivityImage.tsx");

export default function useConjurePresenceActivityImage() {
  const tmp2 = conjurePresenceActivityImageDefault;
  return shared.isThemeDark(useThemeDefault()) ? tmp2.dark : tmp2.light;
};