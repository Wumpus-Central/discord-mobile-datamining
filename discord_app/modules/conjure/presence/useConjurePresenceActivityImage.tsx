// === Module 12840: useConjurePresenceActivityImage ===

// Module 12840 (useConjurePresenceActivityImage)
import shared from "shared" /* 4735 */;
import useThemeDefault from "useTheme" /* 4797 */;
import conjurePresenceActivityImageDefault from "conjurePresenceActivityImage" /* 12841 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/conjure/presence/useConjurePresenceActivityImage.tsx");

export default () => {
  const obj = shared;
  const isThemeDarkResult = obj.isThemeDark(useThemeDefault());
  const tmp2 = conjurePresenceActivityImageDefault;
  return isThemeDarkResult ? tmp2.dark : tmp2.light;
};