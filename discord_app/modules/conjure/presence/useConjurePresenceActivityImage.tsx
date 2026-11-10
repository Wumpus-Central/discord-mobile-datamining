// === Module 15109: useConjurePresenceActivityImage ===

// Module 15109 (useConjurePresenceActivityImage)
import shared from "shared" /* 5149 */;
import useThemeDefault from "useTheme" /* 5371 */;
import conjurePresenceActivityImageDefault from "conjurePresenceActivityImage" /* 15110 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/presence/useConjurePresenceActivityImage.tsx");

export default function useConjurePresenceActivityImage() {
  const tmp2 = conjurePresenceActivityImageDefault;
  return shared.isThemeDark(useThemeDefault()) ? tmp2.dark : tmp2.light;
};