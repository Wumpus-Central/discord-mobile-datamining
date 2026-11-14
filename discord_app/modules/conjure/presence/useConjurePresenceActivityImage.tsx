// === Module 15710: useConjurePresenceActivityImage ===

// Module 15710 (useConjurePresenceActivityImage)
import shared from "shared" /* 5313 */;
import useThemeDefault from "useTheme" /* 5547 */;
import conjurePresenceActivityImageDefault from "conjurePresenceActivityImage" /* 15711 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/presence/useConjurePresenceActivityImage.tsx");

export default function useConjurePresenceActivityImage() {
  const tmp2 = conjurePresenceActivityImageDefault;
  return shared.isThemeDark(useThemeDefault()) ? tmp2.dark : tmp2.light;
};