// === Module 14377: useConjurePresenceActivityImage ===

// Module 14377 (useConjurePresenceActivityImage)
import shared from "shared" /* 4830 */;
import useThemeDefault from "useTheme" /* 5032 */;
import conjurePresenceActivityImageDefault from "conjurePresenceActivityImage" /* 14378 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/presence/useConjurePresenceActivityImage.tsx");

export default function useConjurePresenceActivityImage() {
  const tmp2 = conjurePresenceActivityImageDefault;
  return shared.isThemeDark(useThemeDefault()) ? tmp2.dark : tmp2.light;
};