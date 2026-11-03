// === Module 14979: useConjurePresenceActivityImage ===

// Module 14979 (useConjurePresenceActivityImage)
import shared from "shared" /* 5148 */;
import useThemeDefault from "useTheme" /* 5376 */;
import conjurePresenceActivityImageDefault from "conjurePresenceActivityImage" /* 14980 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/presence/useConjurePresenceActivityImage.tsx");

export default function useConjurePresenceActivityImage() {
  const tmp2 = conjurePresenceActivityImageDefault;
  return shared.isThemeDark(useThemeDefault()) ? tmp2.dark : tmp2.light;
};