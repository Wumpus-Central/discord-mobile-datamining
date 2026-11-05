// === Module 15073: useConjurePresenceActivityImage ===

// Module 15073 (useConjurePresenceActivityImage)
import shared from "shared" /* 5150 */;
import useThemeDefault from "useTheme" /* 5379 */;
import conjurePresenceActivityImageDefault from "conjurePresenceActivityImage" /* 15074 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/presence/useConjurePresenceActivityImage.tsx");

export default function useConjurePresenceActivityImage() {
  const tmp2 = conjurePresenceActivityImageDefault;
  return shared.isThemeDark(useThemeDefault()) ? tmp2.dark : tmp2.light;
};