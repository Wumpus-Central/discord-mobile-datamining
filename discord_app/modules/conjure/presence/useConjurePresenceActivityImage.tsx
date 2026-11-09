// === Module 15083: useConjurePresenceActivityImage ===

// Module 15083 (useConjurePresenceActivityImage)
import shared from "shared" /* 5147 */;
import useThemeDefault from "useTheme" /* 5369 */;
import conjurePresenceActivityImageDefault from "conjurePresenceActivityImage" /* 15084 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/presence/useConjurePresenceActivityImage.tsx");

export default function useConjurePresenceActivityImage() {
  const tmp2 = conjurePresenceActivityImageDefault;
  return shared.isThemeDark(useThemeDefault()) ? tmp2.dark : tmp2.light;
};