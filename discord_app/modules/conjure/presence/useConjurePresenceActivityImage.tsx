// === Module 14364: useConjurePresenceActivityImage ===

// Module 14364 (useConjurePresenceActivityImage)
import shared from "shared" /* 4799 */;
import useThemeDefault from "useTheme" /* 5001 */;
import conjurePresenceActivityImageDefault from "conjurePresenceActivityImage" /* 14365 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/presence/useConjurePresenceActivityImage.tsx");

export default function useConjurePresenceActivityImage() {
  const tmp2 = conjurePresenceActivityImageDefault;
  return shared.isThemeDark(useThemeDefault()) ? tmp2.dark : tmp2.light;
};