// === Module 14903: useConjurePresenceActivityImage ===

// Module 14903 (useConjurePresenceActivityImage)
import shared from "shared" /* 5050 */;
import useThemeDefault from "useTheme" /* 5252 */;
import conjurePresenceActivityImageDefault from "conjurePresenceActivityImage" /* 14904 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/presence/useConjurePresenceActivityImage.tsx");

export default function useConjurePresenceActivityImage() {
  const tmp2 = conjurePresenceActivityImageDefault;
  return shared.isThemeDark(useThemeDefault()) ? tmp2.dark : tmp2.light;
};