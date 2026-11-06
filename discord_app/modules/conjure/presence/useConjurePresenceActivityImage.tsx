// === Module 15050: useConjurePresenceActivityImage ===

// Module 15050 (useConjurePresenceActivityImage)
import shared from "shared" /* 5177 */;
import useThemeDefault from "useTheme" /* 5399 */;
import conjurePresenceActivityImageDefault from "conjurePresenceActivityImage" /* 15051 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/presence/useConjurePresenceActivityImage.tsx");

export default function useConjurePresenceActivityImage() {
  const tmp2 = conjurePresenceActivityImageDefault;
  return shared.isThemeDark(useThemeDefault()) ? tmp2.dark : tmp2.light;
};